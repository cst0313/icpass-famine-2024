import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import NewScanner from './NewScanner';
import { FormGroup, FormControlLabel, Typography } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function QRBlock(props) {
	const [checked, setChecked] = useState(false);
	let block;
	function handleChange() {
		setChecked(!checked);
	}

	if (checked) {
		block = <NewScanner setChecked={setChecked} snapshot={props.snapshot} id={props.id} />;
	} else {
		block = null;
	}
	const theme_3 = createTheme({
		typography: {
			fontFamily:'Ubuntu'
		},
		FormControlLabel: {
			fontFamily: 'Ubuntu',
			fontWeight: 'bold'
		}
	});
	return (
		<>
		<ThemeProvider theme = {theme_3}>
			<Stack spacing={2}>
				<FormGroup>
					<FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label={<Typography fontWeight='bold'>TOGGLE SCANNER</Typography>} color="#111A2D"/>
				</FormGroup>
				{block}
			</Stack>
		</ThemeProvider>
		</>
	);
}