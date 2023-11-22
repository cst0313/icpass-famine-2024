import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const BobaShop = ({ setFormData }) => {
  const [result, setResult] = useState(true);

  return (
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
          happiness: -1,
          money: value ? 100 : 0,
          education: 0,
          charity: 0,
          married: false,
          jailed: false
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
  )
}

export default BobaShop;
