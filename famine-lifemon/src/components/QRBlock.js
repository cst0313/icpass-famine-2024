import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import Scanner from './Scanner';
import Code from './Code';
import { FormGroup, FormControlLabel } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function QRBlock(props) {
	const [checked, setChecked] = useState(false);
	let block;

	function handleChange() {
		setChecked(!checked);
	}

	if (checked) {
		block = <Scanner setChecked={setChecked} snapshot={props.snapshot} id={props.id} />;
	} else {
		block = <Code id={props.id} />;
	}
	const theme_3 = createTheme({
		typography: {
			fontFamily:'Courier+Prime'
		}
	});
	return (
		<>
		<ThemeProvider theme = {theme_3}>
			<Stack spacing={2}>
				<FormGroup>
					<FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="TOGGLE SCANNER" color="#111A2D"/>
				</FormGroup>
				{block}
			</Stack>
		</ThemeProvider>
		</>
	);
}