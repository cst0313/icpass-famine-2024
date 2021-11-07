import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

class Stats extends React.Component {
	render () {
		return (
			<Card variant="outlined">
				<Grid container spacing={2} fontSize={20}>
					<Grid item xs={3}>
						<Typography variant="body1">
							Name: 
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							Adrian Wong
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Health: 
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Happniess: 
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Money:
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							$1500
						</Typography>
					</Grid>
				</Grid>
			</Card>
		);
	}
}

export default Stats;