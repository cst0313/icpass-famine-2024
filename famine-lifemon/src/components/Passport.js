import * as React from 'react';
import { useCookies } from 'react-cookie';

import Typography from '@mui/material/Typography';

import Stats from './Stats';
import Code from './Code';

export default function Passport() {
	const [cookies, setCookie] = useCookies(['id']);
	if (!cookies.id) {
		return (
			<Typography variant="h1">
				ID not found
			</Typography>
		)
	}
	return (
		<>
			<Stats id={cookies.id} />
			<Code id={cookies.id} />
		</>
	);
}