import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Title() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<img
					className="logo"
					src="passlogo.png"
					alt="ICPASS logo" />
			</Grid>
			<Grid item className="title" xs={8}>
				<Typography
					variant="h4"
					fontSize={30}
				>
					ICPASS Famine 24 Passport
				</Typography>
			</Grid>
		</Grid>
	);
}
