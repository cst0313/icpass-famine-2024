import * as React from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Snackbar, Slide, Alert } from '@mui/material';

export default function Scanner(props) {
	const [successOpen, setSuccessOpen] = React.useState(false);
	const [failOpen, setFailOpen] = React.useState(false);

	function handleResult(result, error) {
		if (!!result) {
			try {
				const header = JSON.parse(result.text).header;
				if (header === 'famine-2021-lifemon') {
					setSuccessOpen(true);
				} else {
					setFailOpen(true);
				}
			} catch (e) {
				setFailOpen(true);
			}
		}

		if (!!error) {
			console.info(error);
		}
	}

	return (
		<>
			<QrReader
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