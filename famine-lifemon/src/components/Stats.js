import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { doc, DocumentSnapshot } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { db } from '../database/firebase';

export default function Stats() {
	const [snapshot, loading, error] = useDocumentData(
		doc(db, "users", "euLcu7FQBzyTjYprBpzT")
	);
	if (error) {
		console.log(JSON.stringify(error));
	}
	console.log(snapshot);
	const happy_symbol = "😄";
	const health_symbol = "❤️";
	return (
		<Card variant="outlined">
			<Grid container spacing={2} fontSize={20}>
				<Grid item xs={3}>
					<Typography variant="body1">
						Name: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						Adrian Wong
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Health: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{health_symbol.repeat(10)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Happniess: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{happy_symbol.repeat(10)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Money:
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{"$" + 1500}
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
