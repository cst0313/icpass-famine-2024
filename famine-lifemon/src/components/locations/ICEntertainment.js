import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const ICEntertainment = ({ setFormData }) => {
  const [type, setType] = useState(true);
  const [result, setResult] = useState(true);

  return (
    <>
      <TextField
        required
        id="type-select"
        size='large'
        value={type}
        label="Type"
        onChange={e => { 
          const value = e.target.value;
          setType(value);
          setFormData({
            food: -1,
            happiness: result ? 5 : -1,
            money: value ? (result ? 120 : 30) : (result ? 150 : 50),
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={true}>Actress & Singer</MenuItem>
        <MenuItem key={1} value={false}>Influencer</MenuItem>
      </TextField>
      <TextField
        required
        id="result-select"
        size='large'
        value={result}
        label="Result"
        onChange={e => { 
          const value = e.target.value;
          setResult(value);
          setFormData({
            food: -1,
            happiness: value ? 5 : -1,
            money: type ? (value ? 120 : 30) : (value ? 150 : 50),
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={true}>Successful</MenuItem>
        <MenuItem key={1} value={false}>Fail</MenuItem>
      </TextField>
    </>
  )
}

export default ICEntertainment;
