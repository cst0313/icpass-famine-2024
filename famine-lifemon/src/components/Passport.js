import * as React from 'react';

import Stats from './Stats';
import NewUser from './NewUser';
import QRBlock from './QRBlock';

export default function Passport(props) {
	const cookies = props.cookies;
	const setCookie = props.setCookie;
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