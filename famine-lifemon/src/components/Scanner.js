import * as React from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { Typography } from '@mui/material';

export default function Scanner(id) {
	const [data, setData] = React.useState('No result');

	function handleResult(result, error) {
		if (!!result) {
			setData(result.text);
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
			<Typography variant="body1">
				{data}
			</Typography>
		</>
	);
}