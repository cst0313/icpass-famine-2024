import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';

import { db } from '../database/firebase';

export default function NewUser(props) {
	const [name, setName] = useState("");
	const setCookie = props.setCookie;
	
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
		if (Math.random() < 0.2) {
			setDoc(doc(db, "users", id), {
				name: name,
				health: 10,
				happiness: 10,
				money: 1000,
				education: 2,
				married: false,
				covid: false,
				cured: false
			});
		} else {
			setDoc(doc(db, "users", id), {
				name: name,
				health: 10,
				happiness: 10,
				money: 500,
				education: 0,
				married: false,
				covid: false,
				cured: false
			});
		}
		setCookie("id", id);
	}

	return (
		<Paper>
			<form onSubmit={handleSubmit}>
				<Typography variant="h4">
					Enter your name
				</Typography>
				<TextField 
					required
					id="outline-required"
					onChange={e => setName(e.target.value)}
				/>
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</Paper>
	);
}