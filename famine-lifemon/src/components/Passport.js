import * as React from 'react';

import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import Stats from './Stats';
import QRBlock from './QRBlock';

import { db } from '../database/firebase';

export default function Passport(props) {
	const [snapshot, loading, error] = useDocumentData(
		doc(db, "users", props.id)
	);
	if (error) {
		console.log(JSON.stringify(error));
	}
	return (
		<>
			<Stats snapshot={snapshot} loading={loading} id={props.id} />
			<QRBlock snapshot={snapshot} lodaing={loading} id={props.id} />
		</>
	);
}