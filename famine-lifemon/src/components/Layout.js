import { Stack } from '@mui/material';
import * as React from 'react';

import {Outlet} from 'react-router-dom';
import Title from './Title';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function Layout() {
	const theme_1 = createTheme({
		typography: {
			fontFamily:'Merriweather'
		}
	});
	return (
		<ThemeProvider theme = {theme_1}>
			<Stack spacing={4} color="#111A2D">
				<Title />
				<Outlet />
			</Stack>
		</ThemeProvider>	
	);
}