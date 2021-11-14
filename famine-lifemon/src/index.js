import * as React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/400.css';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Passport from './components/Passport';
import Layout from './components/Layout';
import Admin from './components/Admin';

ReactDOM.render(
	<CookiesProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Passport />} />
					<Route path="admin" element={<Admin />} />

					<Route path="*" element={<Passport />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</CookiesProvider>,
	document.getElementById('root')
);