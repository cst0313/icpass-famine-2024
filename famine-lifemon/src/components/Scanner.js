import * as React from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Snackbar, Slide, Alert } from '@mui/material';
import { doc, updateDoc, increment } from 'firebase/firestore';

import { db } from '../database/firebase';

const COVID_PROB = 0.4;
const TUITION_LEVELS = [0, 200, 550, 850];

export default function Scanner(props) {
	const [successOpen, setSuccessOpen] = React.useState(false);
	const [failOpen, setFailOpen] = React.useState(false);

	const snapshot = props.snapshot;
	const docRef = doc(db, "users", props.id);

	function updateEducation(education, passed) {
		const tuition = -1 * (TUITION_LEVELS[education] + snapshot.retake * 50);
		
		updateDoc(docRef, {
			money: increment(tuition),
			education: passed ? education : snapshot.education,
			retake: passed ? 0 : increment(1),
			covid: !snapshot.cured && (snapshot.covid || (Math.random() < COVID_PROB))
		});
	}

	function handleResult(result, error) {
		if (!!result) {
			try {
				const data = JSON.parse(result.text);
				if (data.header === 'famine-2021-lifemon') {
					switch (data.special) {
						case "education":
							updateEducation(data.education, data.passed);
							break;
						case "jailed":
							updateDoc(docRef, {
								money: Math.floor(snapshot.money / 2),
								happiness: Math.max(0, snapshot.happiness - 2),
								covid: !snapshot.cured && (snapshot.covid || (Math.random() < COVID_PROB))
							});
							break;
						case "cured":
							updateDoc(docRef, {
								money: increment(-500),
								health: Math.min(15, snapshot.health + 2),
								covid: !snapshot.covid,
								cured: snapshot.covid
							});
							break;
						case "married":
							updateDoc(docRef, {
								happiness: snapshot.married ? snapshot.happiness : Math.min(15, snapshot.happiness + 3),
								married: true,	
								covid: !snapshot.cured && (snapshot.covid || (Math.random() < COVID_PROB))
							});
							break;
						default:
							updateDoc(docRef, {
								money: increment(data.money),
								happiness: Math.min(15, Math.max(0, snapshot.happiness + data.happiness)),
								health: Math.min(15, Math.max(0, snapshot.health + data.health)),
								covid: !snapshot.cured && (snapshot.covid || (Math.random() < COVID_PROB))
							});
					}
					setSuccessOpen(true);
					props.setChecked(false);
				} else {
					setFailOpen(true);
				}
			} catch (e) {
				setFailOpen(true);
				throw e;
			}
		}
		if (!!error) {
			console.info(error);
		}
	}

	return (
		<>
			<QrReader
				scanDelay={2000}
				constraints={{
					facingMode: "environment"
				}}
				onResult={handleResult}
				style={{
					width: '100%'
				}}
			/>
			<Snackbar
				open={failOpen}
				autoHideDuration={2000}
				onClose={
					(e) => setFailOpen(false)
				}
				TransitionComponent={Slide}
			>
				<Alert 
					severity="error" 
					sx={{width: '100%'}}
					onClose={
						(e) => setFailOpen(false)
					}
				>
					Invalid QR code
				</Alert>
			</Snackbar>
			<Snackbar
				open={successOpen}
				autoHideDuration={2000}
				onClose={
					(e) => setSuccessOpen(false)
				}
				TransitionComponent={Slide}
			>
				<Alert
					severity='success'
					sx={{width: '100%'}}
					onClose={
						(e) => setSuccessOpen(false)
					}
				>
					Scan success
				</Alert>
			</Snackbar>
		</>
	);
}