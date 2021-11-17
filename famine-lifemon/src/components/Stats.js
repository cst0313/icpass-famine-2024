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
	const healthSymbol = "❤️";
	const educationMap = ["None", "Secondary", "Bachelor's", "Master's"];
	return (
		<>
		<ThemeProvider theme = {theme_2}>
			<Card variant="outlined" style={{ background: 'linear-gradient(45deg, #FFE078 10%, #FFC14F 100%)' }} sx={{
				borderColor: loading ? "" : snapshot.covid ? "error.main" : ""
			}}>
				<Grid container spacing={0.5} fontSize={16} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={1}>
					</Grid>
					<Grid item xs={11}>
						<Typography variant="h5" fontSize={12} component="div" spacing={0.5} color="#FFFFFF" fontWeight='medium'>
							Personal details
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2" fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Name
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2" fontWeight='bold' color="#111A2D" fontSize={14} style={{textTransform: 'uppercase'}} >
							{loading ? "Loading..." : snapshot.name}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Asset
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2" fontWeight='bold' color="#111A2D" fontSize={14}>
							{loading ? "Loading..." : "$" + snapshot.money}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Health
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : healthSymbol.repeat(snapshot.health)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
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
			</Card><Card variant="outlined" style={{ background: 'linear-gradient(45deg, #4FB2AA 10%, #3F8F89 100%)' }} sx={{
				borderColor: loading ? "" : snapshot.covid ? "error.main" : ""
			}}>
				<Grid container spacing={0.5} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff" fontWeight='light'
							fontSize={14}
							>
							Qualification
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff" fontWeight='bold' style={{textTransform: 'uppercase'}} >
							{loading ? "Loading..." : educationMap[snapshot.education]}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff" fontWeight='light'
							fontSize={14}
						>	
							Marital status
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff" fontWeight='bold'>
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
