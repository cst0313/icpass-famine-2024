import { Stack } from '@mui/material';
import * as React from 'react';

import {Outlet} from 'react-router-dom';
import Title from './Title';

export default function Layout() {
	return (
		<Stack spacing={2}>
			<Title />
			<Outlet />
		</Stack>
	);
}