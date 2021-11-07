import * as React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/400.css';
import Stack from '@mui/material/Stack';

import './index.css';
import Title from './components/Title';
import Stats from './components/Stats';
import Code from './components/Code';

ReactDOM.render(
	<Stack spacing={2}>
		<Title />
		<Stats />
		<Code />
	</Stack>,
	document.getElementById('root')
);