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
          food: -1,
          happiness: 2,
          money: value === 0 ? 100 : 0,
          charity: value === 0 ? 5: 0,
          married: false,
        });
      }}
      sx={{width: '20em'}}
      select
      fullWidth
      margin='dense'
    >
      <MenuItem key={0} value={0}>Recycling Operative</MenuItem>
      <MenuItem key={1} value={1}>Curling</MenuItem>
    </TextField>
  )
}

export default CommunityCentre;
