import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const CommunityCentre = ({ setFormData }) => {
  const [type, setType] = useState(true);

  return (
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
