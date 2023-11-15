import * as React from 'react';
import {useState} from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { setDoc, doc } from 'firebase/firestore';

import { db } from '../database/firebase';

export default function NewUser(props) {
	const theme_3 = createTheme({
		typography: {
			fontFamily:'Ubuntu'
		}
	});
	const [name, setName] = useState("");
	
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	function generateString(length) {
			let result = ' ';
			const charactersLength = characters.length;
			for ( let i = 0; i < length; i++ ) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;
	}

	function handleSubmit(e) {
		e.preventDefault();
		const id = generateString(20);

		/* Randomize Stats*/
		const educations = [
			{education: 0, pct: 12}, // Primary    60%
			{education: 1, pct: 7},  // Secondary  30%
			{education: 2, pct: 1},  // University 5%
			{education: 3, pct: 0}   // Graduate   0%
		];

		const moneyList = [
			{money: 100, pct: 14},
			{money: 200, pct: 5},
			{money: 500, pct: 1},
		];

		const foods = [
			{food: 2, pct: 7},
			{food: 6, pct: 10},
			{food: 10, pct: 3},
		];
		
		function handleRandom(table) {
			const expanded = table.flatMap(entry => Array(entry.pct).fill(entry));
			return expanded[Math.floor(Math.random() * expanded.length)];
		}
	

		setDoc(doc(db, "users", id), {
			name: name,
			food: handleRandom(foods).food,
			happiness: 5,
			money: handleRandom(moneyList).money,
			education: handleRandom(educations).education,
			charity: 0,
			showcharity: false,
			married: false,
			jailed: false
		});
		props.setId(id);
	}

	return (
		<>	
		<ThemeProvider theme = {theme_3}>
			<Paper elevation={0}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
						<Grid item xs={8}>	
							<Typography variant="h4" 
								fontSize={20}
								fontWeight="bold"
								color="#1976D2"
								align="center"
							>
								Enter your name
							</Typography>
							<TextField 
								required
								id="filled-basic" variant="standard" size="large"
								onChange={e => setName(e.target.value)}
								margin="dense"
							/>
						</Grid>
						<Grid item xs={3}> 	
							<Button size="small" variant="contained" type="submit" style={{ borderRadius: 35,backgroundColor:'3B5A9D',fontSize: "14px"}}>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</ThemeProvider>
		</>
	);
}