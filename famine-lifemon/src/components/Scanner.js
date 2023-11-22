import * as React from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Snackbar, Slide, Alert } from '@mui/material';
import { doc, updateDoc, increment } from 'firebase/firestore';

import { db } from '../database/firebase';

const TUITION_LEVELS = [0, 0, 0, 0];

export default function Scanner(props) {
	const [poorOpen, setPoorOpen] = React.useState(false);
	const [failOpen, setFailOpen] = React.useState(false);

	const snapshot = props.snapshot;
	const docRef = doc(db, "users", props.id);

	function updateEducation(education, passed) {
		const tuition = (TUITION_LEVELS[education])
		if (snapshot.money < tuition) {
			setPoorOpen(true);
			return false;
		}
		updateDoc(docRef, {
			money: increment(-tuition),
			education: passed ? education > snapshot.education ? education : snapshot.education : snapshot.education,
		});
		return true;
	}
	
	const validTimestamp = (timestamp) => 
		Math.abs(Date.now() - timestamp) < 10000

	function handleResult(result, error) {
		if (!!result) {
			try {
				const data = JSON.parse(result.text);
				if (!validTimestamp(data.timestamp)) {
					setFailOpen(true);
					return;
				}
				if (data.header === 'famine-2023-lifemon') {
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
								happiness: snapshot.married ? snapshot.happiness : (snapshot.happiness + 6),
								married: true,
							});
							break;
						case "donor":
							if (snapshot.food > 0) {
								updateDoc(docRef, {
									charity: snapshot.charity + 5,
									food: Math.max(0, snapshot.food - 1),
									happiness: snapshot.happiness + 5,
								});
							}
							break;
						case "recipient":
							updateDoc(docRef, {
								charity: snapshot.charity + 2,
								food: snapshot.food + 1,
								happiness: snapshot.happiness + 3,
							});
							break;
						default:
							if (snapshot.money + data.money < 0) {
								setPoorOpen(true);
								return;
							}
							updateDoc(docRef, {
								money: increment(data.money),
								happiness: Math.max(0, snapshot.happiness + data.happiness),
								food: Math.max(0, snapshot.food + data.food),
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