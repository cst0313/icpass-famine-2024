import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Church = ({ setFormData }) => {
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
          food: value ? -3 : 0,
          happiness: value ? 6 : 3,
          money: 0,
          charity: 0,
          married: value,
        });
      }}
      sx={{width: '20em'}}
      select
      fullWidth
      margin='dense'
    >
      <MenuItem key={0} value={true}>Couple</MenuItem>
      <MenuItem key={1} value={false}>Family</MenuItem>
    </TextField>
  )
}

export default Church;
