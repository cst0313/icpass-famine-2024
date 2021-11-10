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
						{loading ? "Lodaing..." : snapshot.name}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Health: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{loading ? "Loading..." : health_symbol.repeat(snapshot.health)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Happniess: 
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{loading ? "Loading..." : happy_symbol.repeat(snapshot.happiness)}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1">
						Money:
					</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">
						{loading ? "Loading..." : "$" + snapshot.money}
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
