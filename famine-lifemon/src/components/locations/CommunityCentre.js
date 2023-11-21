import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const CommunityCentre = ({ setFormData }) => {
  const [result, setResult] = useState(true);

  return (
    <TextField
      required
      id="details-select"
      size='large'
      value={result}
      label="Details"
      onChange={e => {
        const value = e.target.value;
        setResult(value);
        setFormData({
          food: value ? -1 : 0,
          happiness: 5,
          money: 0,
          education: 0,
          charity: 5,
          showcharity: false,
          married: false,
          jailed: false
        });
      }}
      sx={{width: '20em'}}
      select
      fullWidth
      margin='dense'
    >
      <MenuItem key={0} value={true}>Food Delivery</MenuItem>
      <MenuItem key={1} value={false}>Waste Collection</MenuItem>
    </TextField>
  )
}

export default CommunityCentre;
