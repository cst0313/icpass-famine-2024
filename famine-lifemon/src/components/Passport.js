import * as React from 'react';
import { useCookies } from 'react-cookie';

import Stats from './Stats';
import NewUser from './NewUser';
import QRBlock from './QRBlock';

export default function Passport() {
	const [cookies, setCookie] = useCookies(['id']);
	if (!cookies.id) {
		return (
			<NewUser setCookie={setCookie}/>
		)
	}
	return (
		<>
			<Stats id={cookies.id} />
			<QRBlock id={cookies.id} />
		</>
	);
}