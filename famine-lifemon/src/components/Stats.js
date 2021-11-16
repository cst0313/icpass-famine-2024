import * as React from 'react';

import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { ThemeProvider,createTheme } from '@mui/material/styles';

import { db } from '../database/firebase';


export default function Stats(id) {
	const theme_2 = createTheme({
		typography: {
			fontFamily:'Karla'
		}
	});
	const [snapshot, loading, error] = useDocumentData(
		doc(db, "users", id.id)
	);
	if (error) {
		console.log(JSON.stringify(error));
	}
	const happySymbol = "😄";
	const healthSymbol = "🍎️";
	const educationMap = ["None", "Secondary", "Bachelor's", "Master's"];
	return (
		<>
		<ThemeProvider theme = {theme_2}>
			<Card variant="outlined" style={{ background: '#FFEABC' }} sx={{
				borderColor: loading ? "" : snapshot.covid ? "error.main" : ""
			}}>
				<Grid container spacing={0.5} fontSize={16} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={1}>
					</Grid>
					<Grid item xs={11}>
						<Typography variant="h5" fontSize={12} component="div" spacing={0.5} color="#000064">
							Personal details
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2">
							Name
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2" fontWeight='bold' color="#19273A" style={{textTransform: 'uppercase'}} >
							{loading ? "Loading..." : snapshot.name}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2">
							Asset
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : "$" + snapshot.money}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2">
							Health
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : healthSymbol.repeat(snapshot.health)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2">
							Happiness
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : happySymbol.repeat(snapshot.happiness)}
						</Typography>
					</Grid>
					<Grid item xs={12}>
					</Grid>
				</Grid>
			</Card><Card variant="outlined" style={{ background: '#FD7697' }} sx={{
				borderColor: loading ? "" : snapshot.covid ? "error.main" : ""
			}}>
				<Grid container spacing={0.5} fontSize={16} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff">
							Qualification
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff">
							{loading ? "Loading..." : educationMap[snapshot.education]}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff">
							Marital status
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff">
							{loading ? "Loading..." : snapshot.married ? "MARRIED" : "SINGLE"}
						</Typography>
					</Grid>
					<Grid item xs={12}>
					</Grid>
				</Grid>
			</Card>
		</ThemeProvider>
		</>
	);
}
