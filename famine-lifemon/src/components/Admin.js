import * as React from 'react';

import { Typography, Card, Accordion, AccordionSummary, AccordionDetails, Slider, Input, Grid, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Code from './Code';

export default function Admin() {
	const [formData, setFormData] = React.useState({
		happiness : 0,
		health : 0,
		money : 0,
		taxed : false,
		education : 0
	});
	const [expanded, setExpanded] = React.useState("");

	const handleExpand = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : "");
	}

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
				<Accordion expanded={expanded === 'general'} onChange={handleExpand('general')}>
					<AccordionSummary  expandIcon={<ExpandMoreIcon />} >
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
						<FormControlLabel disabled={formData.money < 800} control={
							<Checkbox checked={formData.taxed} onChange={
								(e) => setFormData({...formData, taxed: e.target.checked})
							} />
						} label="Taxed?" />
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded === 'extra'} onChange={handleExpand('extra')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} >
						<Typography>
							Job-specific settings
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Education
						</Typography>
						<FormControl component="fieldset">
							<RadioGroup row value={formData.education} onChange={
								(e) => setFormData({...formData, education: parseInt(e.target.value)})
							}>
								<FormControlLabel value={0} control={<Radio />} label="None" />
								<FormControlLabel value={1} control={<Radio />} label="Secondary" />
								<FormControlLabel value={2} control={<Radio />} label="Bachelor's" />
								<FormControlLabel value={3} control={<Radio />} label="Master's" />
							</RadioGroup>
						</FormControl>
					</AccordionDetails>
				</Accordion>
			</Card>
			<Code 
				happiness={formData.happiness} 
				health={formData.health} 
				money={formData.money} 
				taxed={formData.taxed && formData.money >= 800}
				education={formData.education}
			/>
		</div>
	);
}