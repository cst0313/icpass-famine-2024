import React, { useState, useEffect } from 'react';
import { MenuItem, TextField } from '@mui/material';

import Code from './Code';
import BobaShop from './locations/BobaShop';
import Church from './locations/Church';
import CommunityCentre from './locations/CommunityCentre';
import Corporation from './locations/Corporation';
import Factory from './locations/Factory';
import Farm from './locations/Farm';
import FoodBank from './locations/FoodBank';
import Hospital from './locations/Hospital';
import ICEntertainment from './locations/ICEntertainment';
import Lab from './locations/Lab';
import PoliceStationPrison from './locations/PoliceStationPrison';
import School from './locations/School';
import YellowGambleDrug from './locations/YellowGambleDrug';

const NewAdmin = () => {
  const locations = [
    'Boba Shop',
    'Church',
    'Community Centre',
    'Corporation',
    'Factory',
    'Farm',
    'Food Bank',
    'Hospital',
    'IC Entertainment',
    'Lab',
    'Police Station & Prison',
    'School',
    'Yellow Gamble Drug',
  ];

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

  const [location, setLocation] = useState('');

  const [timestamp, setTimestamp] = useState(Date.now());
	const updateTimestamp = () => {
		setTimestamp(Date.now());
	}

	useEffect(() => {
    const intervalId = setInterval(updateTimestamp, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TextField
        required
        id="location-select"
        size='large'
        value={location}
        label="Location"
        onChange={e => { setLocation(e.target.value); }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        {
          locations.map((location, i) => 
            <MenuItem key={i} value={i}>{location}</MenuItem>
          )
        }
      </TextField>
      {
        (location === 0) ? <BobaShop setFormData={setFormData}/> :
        (location === 1) ? <Church setFormData={setFormData}/> :
        (location === 2) ? <CommunityCentre /> :
        (location === 3) ? <Corporation /> :
        (location === 4) ? <Factory /> :
        (location === 5) ? <Farm /> :
        (location === 6) ? <FoodBank /> :
        (location === 7) ? <Hospital /> :
        (location === 8) ? <ICEntertainment /> :
        (location === 9) ? <Lab /> :
        (location === 10) ? <PoliceStationPrison /> :
        (location === 11) ? <School /> :
        (location === 12) ? <YellowGambleDrug /> :
        <></>
      }
      <Code 
        header="famine-2023-lifemon"
        happiness={parseInt(formData.happiness)} 
        food={parseInt(formData.food)} 
        money={parseInt(formData.money)} 
        special={formData.special}
        education={formData.education}
        passed={formData.passed}
        timestamp={timestamp}
      />
    </>
  );
}

export default NewAdmin;
