import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { palette } from '@mui/system';

export default function Title() {
	return (
		<Box sx={{background:'linear-gradient(45deg, #7DC8CA 30%, #CAE9E0 90%)', p:0,m:-2}}>
			<Grid container spacing={2} direction="row" justify="center" alignItems="center" alignContent="center">
				<Grid item xs={4.5} align="center" justifyContent="center">
					<img
						className="logo"
						src="passlogo.png"
						alt="ICPASS logo"/>
				</Grid>
				<Grid item className="title" xs={7.5} p={0}>
					<Typography
						variant="h5"
						fontSize={35}
						fontWeight='bold'
						lineHeight={1}
					>
						Famine 24 Passport
					</Typography>
				</Grid>
			</Grid>
		</Box>
		
	);
}
