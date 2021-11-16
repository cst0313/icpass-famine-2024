import * as React from 'react';

import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import { db } from '../database/firebase';

export default function Stats(id) {
	const [snapshot, loading, error] = useDocumentData(
		doc(db, "users", id.id)
	);
	if (error) {
		console.log(JSON.stringify(error));
	}
	const happySymbol = "😄";
	const healthSymbol = "❤️";
	const educationMap = ["None", "Secondary", "Bachelor's", "Master's"];
	return (
		<Card variant="outlined" style={{background: 'linear-gradient(45deg, #F8AA6F 30%, #FFC654 90%)'}} sx={{
			borderColor: loading ? "" : snapshot.covid ? "error.main" : ""
		}}>
			<Grid container spacing={0.5} fontSize={16} style={{justifyContent:"flex-end", alignItems:"center"}}>
				<Grid item xs={3}>
					<Typography variant="body2">
						Name: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2" fontWeight='bold' color="#19273A">
						{loading ? "Loading..." : snapshot.name}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2">
						Health: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2">
						{loading ? "Loading..." : healthSymbol.repeat(snapshot.health)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2">
						Happiness: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2">
						{loading ? "Loading..." : happySymbol.repeat(snapshot.happiness)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2">
						Money:
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2">
						{loading ? "Loading..." : "$" + snapshot.money}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2">
						Education:
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2">
						{loading ? "Loading..." : educationMap[snapshot.education]}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2">
						Married?
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body2" >
						{loading ? "Loading..." : snapshot.married ? "Yes" : "No"}
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
