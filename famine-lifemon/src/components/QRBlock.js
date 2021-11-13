import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import Scanner from './Scanner';
import Code from './Code';
import { FormGroup, FormControlLabel } from '@mui/material';

export default function QRBlock(id) {
	const [checked, setChecked] = useState(false);
	let block;

	function handleChange() {
		console.log(checked);
		setChecked(!checked);
	}

	if (checked) {
		block = <Scanner id={id.id} />;
	} else {
		block = <Code id={id.id} />;
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