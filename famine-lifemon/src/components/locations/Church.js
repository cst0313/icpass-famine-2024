import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Church = ({ setFormData }) => {
  const [type, setType] = useState(0);

  return (
    <TextField
      required
      id="details-select"
      size='large'
      value={type}
      label="Details"
      onChange={e => {
        const value = e.target.value;
        setType(value);
        setFormData({
          food: value === 2 ? -1 : 0,
          happiness: value === 0 ? 6 : value === 1 ? 3 : 0,
          money: 0,
          education: 0,
          charity: 0,
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
      <MenuItem key={0} value={0}>Couple</MenuItem>
      <MenuItem key={1} value={1}>Family</MenuItem>
      <MenuItem key={2} value={2}>Minus Food</MenuItem>
    </TextField>
  )
}

export default Church;
