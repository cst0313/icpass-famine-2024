import React, { useState } from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Snackbar, Slide, Alert } from '@mui/material';
import { doc, updateDoc, increment } from 'firebase/firestore';

import { db } from '../database/firebase';

export default function Scanner({ setChecked, snapshot, id }) {
	const [poorOpen, setPoorOpen] = useState(false);
	const [failOpen, setFailOpen] = useState(false);

	const docRef = doc(db, "users", id);
	
	const validTimestamp = (timestamp) => 
		Math.abs(Date.now() - timestamp) < 10000

	const handleScan = (result) => {
		if (!result) {
			return;
		}
		try {
			const data = JSON.parse(result.text);
			if (!validTimestamp(data.timestamp)) {
				console.log("Time error");
				console.log(data);
				setFailOpen(true);
				return;
			}
			if (data.header !== 'famine-2023-lifemon') {
				console.log("Header error");
				setFailOpen(true);
				return;
			}
			if (snapshot.food + data.food < 0) {
				setPoorOpen(true);
				return;
			}
			if (snapshot.happiness + data.happiness < 0) {
				setPoorOpen(true);
				return;
			}
			if (snapshot.money + data.money < 0) {
				setPoorOpen(true);
				return;
			}
			if (!!data.education && snapshot.education !== data.education.original) {
				console.log(data);
				setFailOpen(true);
				return;
			}
			if (!!data.education) {
				updateDoc(docRef, {
					food: increment(data.food),
					happiness: increment(data.happiness),
					money: increment(data.money),
					education: increment(data.education.pass),
					charity: increment(data.charity),
					married: snapshot.married || data.married,
				});
			} else {
				updateDoc(docRef, {
					food: increment(data.food),
					happiness: increment(data.happiness),
					money: increment(data.money),
					charity: increment(data.charity),
					married: snapshot.married || data.married,
				});
			}
			setChecked(false);
		} catch (e) {
			console.log("Uncaught error");
			console.log(e);
			setFailOpen(true);
		}
	}

	return (
		<>
			<QrReader
			scanDelay={1000}
				constraints={{
					facingMode: "environment",
				}}
				onResult={handleScan}
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