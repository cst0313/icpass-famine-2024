import * as React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/400.css';
import Stack from '@mui/material/Stack';

import './index.css';
import Title from './components/Title';
import Stats from './components/Stats';

ReactDOM.render(
	<Stack spacing={2}>
		<Title />
		<Stats />
	</Stack>,
	document.getElementById('root')
);