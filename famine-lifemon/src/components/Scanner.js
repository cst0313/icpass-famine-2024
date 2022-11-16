import * as React from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Snackbar, Slide, Alert } from '@mui/material';
import { doc, updateDoc, increment } from 'firebase/firestore';

import { db } from '../database/firebase';

const TUITION_LEVELS = [0, 200, 550, 850];

export default function Scanner(props) {
	const [poorOpen, setPoorOpen] = React.useState(false);
	const [failOpen, setFailOpen] = React.useState(false);

	const snapshot = props.snapshot;
	const docRef = doc(db, "users", props.id);

	function updateEducation(education, passed) {
		const tuition = (TUITION_LEVELS[education] + snapshot.retake * 50)
		if (snapshot.money < tuition) {
			setPoorOpen(true);
			return false;
		}
		updateDoc(docRef, {
			money: increment(-tuition),
			education: passed ? education : snapshot.education,
		});
		return true;
	}

	function handleResult(result, error) {
		if (!!result) {
			try {
				const data = JSON.parse(result.text);
				if (data.header === 'famine-2021-lifemon') {
					switch (data.special) {
						case "education":
							if (!updateEducation(data.education, data.passed)) {
								return;
							}
							break;
						case "jailed":
							updateDoc(docRef, {
								money: Math.floor(snapshot.money / 2),
								happiness: Math.max(0, snapshot.happiness - 2),
							});
							break;
						case "married":
							updateDoc(docRef, {
								happiness: snapshot.married ? snapshot.happiness : Math.min(15, snapshot.happiness + 3),
								married: true,
							});
							break;
						default:
							if (snapshot.money + data.money < 0) {
								setPoorOpen(true);
								return;
							}
							updateDoc(docRef, {
								money: increment(data.money),
								happiness: Math.min(15, Math.max(0, snapshot.happiness + data.happiness)),
								health: Math.min(15, Math.max(0, snapshot.health + data.health)),
							});
					}
					setPoorOpen(true);
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
				open={poorOpen}
				autoHideDuration={2000}
				onClose={
					(e) => setPoorOpen(false)
				}
				TransitionComponent={Slide}
			>
				<Alert
					severity='warning'
					sx={{width: '100%'}}
					onClose={
						(e) => setPoorOpen(false)
					}
				>
					You cannot afford this
				</Alert>
			</Snackbar>
		</>
	);
}