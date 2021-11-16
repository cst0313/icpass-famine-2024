import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

export default function Title() {
	return (
		<Box sx={{background:"#1F3149", p:0,m:-2}}>
			<Grid container spacing={2} direction="row" >
				<Grid item className="title" xs={5} p={0} style={{justifyContent:"flex-end", alignItems:"center"}}>
					<Typography
						variant="h5"
						fontSize={22}
						fontWeight='bold'
						lineWeight={1}
					>
						Famine 24
					</Typography>
				</Grid>	
				<Grid item xs={2} style={{alignItems:"center"}} p={0}>
					<img
						className="logo"
						src="passlogo.png"
						alt="ICPASS logo"/>
				</Grid>
				<Grid item className="title" xs={5} p={0} style={{justifyContent:"flex-start", alignItems:"center"}}>
					<Typography
						variant="h5"
						fontSize={22}
						fontWeight='bold'
						lineHeight={1}
					>
						Passport
					</Typography>
				</Grid>
			</Grid>
		</Box>
		
	);
}
