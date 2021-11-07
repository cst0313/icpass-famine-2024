import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Adrian Wong",
			health: 10,
			happiness: 10,
			money: 1500,
			health_symbol: "❤️",
			happy_symbol: "😄"
		}
	}

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
							{this.state.name}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Health: 
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							{this.state.health_symbol.repeat(this.state.health)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Happniess: 
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							{this.state.happy_symbol.repeat(this.state.happiness)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1">
							Money:
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body1">
							{"$" + this.state.money}
						</Typography>
					</Grid>
				</Grid>
			</Card>
		);
	}
}

export default Stats;