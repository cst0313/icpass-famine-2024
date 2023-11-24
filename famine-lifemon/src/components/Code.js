import * as React from 'react';

import Paper from '@mui/material/Paper';
import QRCode from 'react-qr-code';
import { sign } from 'jsonwebtoken';
import { secret } from './secret/Secret';

export default function Code(props) {
	return (
		<Paper className="qrcode" align="center" height={100} elevation={5}>
			<QRCode bgColor={"white"} value={sign(props, secret)} size={256} />
		</Paper>
	);
}