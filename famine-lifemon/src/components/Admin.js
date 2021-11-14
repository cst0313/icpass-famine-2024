import * as React from 'react';

import { Typography, Card, Accordion, AccordionSummary, AccordionDetails, Slider, Input, Grid } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Admin() {
	const [formData, setFormData] = React.useState({
		happiness : 0,
		health : 0,
		money : 0
	});
	function handleHBlur () {
		if (formData.happiness < -5) {
			setFormData({formData, happiness: -5});
		} else if (formData.happiness > 5) {
			setFormData({formData, happiness: 5});
		}
	}
	return (
		<div>
			<Card variant="outlined">
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} >
						<Typography>General settings</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Happiness
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={10}>
								<Slider 
									value={formData.happiness}
									onChange={
										(e) => setFormData({...formData, happiness: e.target.value})
									}
									step={1}
									min={-5}
									max={5}
								/>
							</Grid>
							<Grid item xs={2}>
								<Input 
									fullWidth
									value={formData.happiness}
									size="small"
									onChange={
										(e) => setFormData({...formData, happiness: e.target.value})
									}
									onBlur={handleHBlur}
									inputProps={{
										step: 1,
										min: -5,
										max: 5,
										type: 'number',
									}}
								/>
							</Grid>
						</Grid>

						<Typography>
							Health
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={10}>
								<Slider 
									value={formData.health}
									onChange={
										(e) => setFormData({...formData, health: e.target.value})
									}
									step={1}
									min={-5}
									max={5}
								/>
							</Grid>
							<Grid item xs={2}>
								<Input 
									fullWidth
									value={formData.health}
									size="small"
									onChange={
										(e) => setFormData({...formData, health: e.target.value})
									}
									onBlur={handleHBlur}
									inputProps={{
										step: 1,
										min: -5,
										max: 5,
										type: 'number',
									}}
								/>
							</Grid>
						</Grid>

						<Typography>
							Money
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={10}>
								<Slider 
									value={formData.money}
									onChange={
										(e) => setFormData({...formData, money: e.target.value})
									}
									step={100}
									min={-1500}
									max={1500}
								/>
							</Grid>
							<Grid item xs={2}>
								<Input 
									fullWidth
									value={formData.money}
									size="small"
									onChange={
										(e) => setFormData({...formData, money: e.target.value})
									}
									onBlur={handleHBlur}
									inputProps={{
										step: 100,
										min: -1500,
										max: 1500,
										type: 'number',
									}}
								/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Card>
		</div>
	);
}