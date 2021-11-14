import * as React from 'react';

import '@fontsource/roboto/400.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Passport from './Passport';
import Layout from './Layout';
import Admin from './Admin';

export default function App() {
	const [cookies, setCookie] = useCookies(['id']);
	let adminBlock;

	if(!cookies.id) {
		adminBlock = <Admin />;
	} else {
		adminBlock = <Passport cookies={cookies} setCookie={setCookie} />;
	}

	return (
		<CookiesProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Passport cookies={cookies} setCookie={setCookie} />} />
						<Route path="admin" element={adminBlock} />

						<Route path="*" element={<Passport />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CookiesProvider>
	);
}