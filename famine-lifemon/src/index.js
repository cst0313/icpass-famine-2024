import * as React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Button 
				variant = "primary"
			>
				Primary button
			</Button>{' '}
		</>
	);
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);