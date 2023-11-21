import React, { useState, useEffect } from 'react';

import { Typography, Card, Accordion, AccordionSummary, AccordionDetails, Slider, Input, Grid, FormControlLabel, Checkbox, RadioGroup, Radio, FormGroup, Switch } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Code from './Code';

export default function Admin() {
	const [formData, setFormData] = useState({
		food: 0,
		happiness: 0,
		money: 0,
		education: 0,
		charity: 0,
		showcharity: false,
		married: false,
		jailed: false
	});
	const [expanded, setExpanded] = useState("");

	const handleExpand = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : "");
	}

	function handleHappinessBlur () {
		setFormData({...formData, happiness: Math.min(5, Math.max(-5, formData.happiness))});
	}

	function handleFoodBlur () {
		setFormData({...formData, food: Math.min(5, Math.max(-5, formData.food))});
	}

	function handleMoneyBlur () {
		const validMoney = Math.min(2000, Math.max(-2000, formData.money));
		setFormData({...formData, money: validMoney - (validMoney % 100)});
	}

	const [timestamp, setTimestamp] = useState(Date.now());
	const updateTimestamp = () => {
		setTimestamp(Date.now());
	}

	useEffect(() => {
    const intervalId = setInterval(updateTimestamp, 2000);
    return () => clearInterval(intervalId);
  }, []);

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
									onBlur={handleHappinessBlur}
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
							Food
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={10}>
								<Slider 
									value={formData.food}
									onChange={
										(e) => setFormData({...formData, food: e.target.value})
									}
									step={1}
									min={-5}
									max={5}
								/>
							</Grid>
							<Grid item xs={2}>
								<Input 
									fullWidth
									value={formData.food}
									size="small"
									onChange={
										(e) => setFormData({...formData, food: e.target.value})
									}
									onBlur={handleFoodBlur}
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
									step={10}
									min={-2000}
									max={2000}
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
									onBlur={handleMoneyBlur}
									inputProps={{
										step: 100,
										min: -2000,
										max: 2000,
										type: 'number',
									}}
								/>
							</Grid>
						</Grid>
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
							<FormControlLabel checked={formData.special === "married"} control={<Switch onChange={
								(e) => formData.special === "married" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "married"})
							} />} label="Married" />
							<FormControlLabel checked={formData.special === "donor"} control={<Switch onChange={
								(e) => formData.special === "donor" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "donor"})
							} />} label="Donor" />
							<FormControlLabel checked={formData.special === "recipient"} control={<Switch onChange={
								(e) => formData.special === "recipient" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "recipient"})
							} />} label="Recipient" />
							<FormControlLabel checked={formData.special === "education"} control={<Switch onChange={
								(e) => formData.special === "education" ? setFormData({...formData, special: false}) : setFormData({...formData, special: "education"})
							} />} label="Education" />
							<RadioGroup row onChange={
								(e) => setFormData({...formData, education: parseInt(e.target.value)})
							}>
								<FormControlLabel disabled={formData.special !== "education"} value={1} control={<Radio />} label="Secondary" />
								<FormControlLabel disabled={formData.special !== "education"} value={2} control={<Radio />} label="University" />
								<FormControlLabel disabled={formData.special !== "education"} value={3} control={<Radio />} label="Graduate" />
							</RadioGroup>
							<FormControlLabel disabled={formData.special !== "education"} checked={formData.passed} onChange={(e) => setFormData({...formData, passed: !formData.passed})} control={<Checkbox />} label="Passed" />
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</Card>
			<Code 
				header="famine-2023-lifemon"
				happiness={expanded === 'general' ? parseInt(formData.happiness) : 0} 
				food={expanded === 'general' ? parseInt(formData.food) : 0} 
				money={expanded === 'special' ? 0 : formData.taxed && parseInt(formData.money) >= 800 ? 800 + 0.75 * (parseInt(formData.money) - 800) : parseInt(formData.money)} 
				special={expanded === 'special' ? formData.special : false}
				education={expanded === 'special' && formData.special === "education" ? formData.education : 0}
				passed={expanded === 'special' && formData.passed}
				timestamp={timestamp}
			/>
		</div>
	);
}