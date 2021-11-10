import * as React from 'react';
import { useCookies } from 'react-cookie';

import Stats from './Stats';
import Code from './Code';
import NewUser from './NewUser';

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
			<Code id={cookies.id} />
		</>
	);
}