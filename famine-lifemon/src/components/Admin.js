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

const Admin = () => {
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
		married: false,
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

  const handleLocationChange = e => {
    const value = e.target.value;
    setLocation(value);
    setFormData({
      food: value === 6 ? 1 : value === 1 ? -3 : -1,
      happiness: value === 6 ? 1 : value === 1 ? 6 : value === 2 ? 5 : -1,
      money: (
        value === 6 ? -100 :
        value === 4 || value === 9 || value === 7 ? 30 :
        value === 5 || value === 10 ? 150 :
        value === 8 ? 120 :
        value === 3 ? 250 :
        value === 0 ? 100 : 0
      ),
      education: value === 11 ? 1 : 0,
      charity: value === 2 ? 5 : 0,
      married: false,
    });
  }

  return (
    <>
      <TextField
        required
        id="location-select"
        size='large'
        value={location}
        label="Location"
        onChange={handleLocationChange}
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
        (location === 0) ? <BobaShop setFormData={setFormData} /> :
        (location === 1) ? <Church setFormData={setFormData} /> :
        (location === 2) ? <CommunityCentre setFormData={setFormData} /> :
        (location === 3) ? <Corporation setFormData={setFormData} /> :
        (location === 4) ? <Factory setFormData={setFormData} /> :
        (location === 5) ? <Farm setFormData={setFormData} /> :
        (location === 6) ? <FoodBank setFormData={setFormData} /> :
        (location === 7) ? <Hospital setFormData={setFormData} /> :
        (location === 8) ? <ICEntertainment setFormData={setFormData} /> :
        (location === 9) ? <Lab setFormData={setFormData} /> :
        (location === 10) ? <PoliceStationPrison setFormData={setFormData} /> :
        (location === 11) ? <School setFormData={setFormData} /> :
        (location === 12) ? <YellowGambleDrug setFormData={setFormData} /> :
        <></>
      }
      <Code
        header="famine-2023-lifemon"
        food={formData.food}
        happiness={formData.happiness}
        money={formData.money}
        education={formData.education}
        charity={formData.charity}
        married={formData.married}
        timestamp={timestamp}
      />
    </>
  );
}

export default Admin;
