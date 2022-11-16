import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
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
		setDoc(doc(db, "users", id), {
			name: name,
			food: 10,
			happiness: 10,
			money: 1000,
			education: 0,
			charity: 0,
			married: false,
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