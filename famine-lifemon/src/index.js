import * as React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/400.css';
import Stack from '@mui/material/Stack';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import Title from './components/Title';
import Passport from './components/Passport';

ReactDOM.render(
	<CookiesProvider>
		<Stack spacing={2}>
			<Title />
			<Passport />
		</Stack>
	</CookiesProvider>,
	document.getElementById('root')
);