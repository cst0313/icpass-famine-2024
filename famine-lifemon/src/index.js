import * as React from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import '@fontsource/roboto/400.css';
import './index.css';

function Title() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<img
					className = "logo" 
					src = "passlogo.png" 
					alt = "ICPASS logo"
				/>
			</Grid>
			<Grid item className="title" xs={8}>
				<Typography
					variant="h4"
					fontSize={30}
				>
					ICPASS Famine 24 Passport
				</Typography>
			</Grid>
		</Grid>
	);
}

function App() {
	return (
		<Button
			variant = "contained"
		>
			Hello world
		</Button>
	);
}

ReactDOM.render(
	<>
		<Title />	
		<App /> 
	</>,
	document.getElementById('root')
);