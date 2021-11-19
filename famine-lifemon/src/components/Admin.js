import * as React from 'react';

import { Typography, Card, Accordion, AccordionSummary, AccordionDetails, Slider, Input, Grid, FormControlLabel, Checkbox, RadioGroup, Radio, FormGroup, Switch } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Code from './Code';

export default function Admin() {
	const [formData, setFormData] = React.useState({
		happiness : 0,
		health : 0,
		money : 0,
		taxed : false,
		special : false,
		education : 0,
		passed: false,
	});
	const [expanded, setExpanded] = React.useState("");

	const handleExpand = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : "");
	}

	function handleHBlur () {
		if (formData.happiness < -5) {
			setFormData({...formData, happiness: -5});
		} else if (formData.happiness > 5) {
			setFormData({...formData, happiness: 5});
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
										(e) => setFormData({...formData, happiness: parseInt(e.target.value)})
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
										(e) => setFormData({...formData, health: parseInt(e.target.value)})
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
										(e) => setFormData({...formData, money: parseInt(e.target.value)})
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
				<Accordion expanded={expanded === 'special'} onChange={handleExpand('special')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} >
						<Typography>
							Special settings
						</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<FormGroup>
							<FormControlLabel checked={formData.special === "jailed"} control={<Switch onChange={
								(e) => formData.special === "jailed" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "jailed"})
							} />} label="Jailed" />
							<FormControlLabel checked={formData.special === "cured"} control={<Switch onChange={
								(e) => formData.special === "cured" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "cured"})
							} />} label="Cured COVID" />
							<FormControlLabel checked={formData.special === "married"} control={<Switch onChange={
								(e) => formData.special === "married" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "married"})
							} />} label="Married" />
							<FormControlLabel checked={formData.special === "education"} control={<Switch onChange={
								(e) => formData.special === "education" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "education"})
							} />} label="Education" />
							<RadioGroup row onChange={
								(e) => setFormData({...formData, education: parseInt(e.target.value)})
							}>
								<FormControlLabel disabled={formData.special !== "education"} value={1} control={<Radio />} label="Secondary" />
								<FormControlLabel disabled={formData.special !== "education"} value={2} control={<Radio />} label="Bachelor's" />
								<FormControlLabel disabled={formData.special !== "education"} value={3} control={<Radio />} label="Master's" />
							</RadioGroup>
							<FormControlLabel disabled={formData.special !== "education"} checked={formData.passed} onChange={(e) => setFormData({...formData, passed: !formData.passed})} control={<Checkbox />} label="Passed" />
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</Card>
			<Code 
				header="famine-2021-lifemon"
				happiness={expanded === 'general' ? formData.happiness : 0} 
				health={expanded === 'general' ? formData.health : 0} 
				money={expanded === 'special' ? 0 : formData.taxed && formData.money >= 800 ? 800 + 0.75 * (formData.money - 800) : formData.money} 
				special={expanded === 'special' ? formData.special : false}
				education={expanded === 'special' && formData.special === "education" ? formData.education : 0}
				passed={expanded === 'special' && formData.passed}
			/>
		</div>
	);
}