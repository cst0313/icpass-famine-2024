import * as React from 'react';

import '@fontsource/roboto/400.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Passport from './Passport';
import Layout from './Layout';
import Admin from './Admin';
import NewUser from './NewUser';

export default function App() {
	const [cookies, setCookie] = useCookies(['id']);
	let adminBlock;
	let passportBlock;

	if(!cookies.id) {
		adminBlock = <Admin />;
		passportBlock = <NewUser setCookie={setCookie}/>;
	} else {
		adminBlock = <Passport id={cookies.id} />;
		passportBlock = <Passport id={cookies.id} />;
	}

	return (
		<CookiesProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={passportBlock} />
						<Route path="admin" element={adminBlock} />

						<Route path="*" element={passportBlock} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CookiesProvider>
	);
}