import * as React from 'react';

import Paper from '@mui/material/Paper';
import QRCode from 'react-qr-code';

export default function Code(id) {
	return (
		<Paper className="qrcode" align="center" height={100} elevation={5}>
			<QRCode value={id.id} size={128} />
		</Paper>
	);
}