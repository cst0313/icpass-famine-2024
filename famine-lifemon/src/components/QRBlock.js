import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import Scanner from './Scanner';
import Code from './Code';
import { FormGroup, FormControlLabel } from '@mui/material';

export default function QRBlock(props) {
	const [checked, setChecked] = useState(false);
	let block;

	function handleChange() {
		setChecked(!checked);
	}

	if (checked) {
		block = <Scanner snapshot={props.snapshot} id={props.id} />;
	} else {
		block = <Code id={props.id} />;
	}

	return (
		<Stack spacing={2}>
			<FormGroup>
				<FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Toggle scanner" />
			</FormGroup>
			{block}
		</Stack>
	);
}