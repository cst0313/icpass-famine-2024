import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const BobaShop = ({ setFormData }) => {
  const [result, setResult] = useState(true);

  return (
    <TextField
      // required
      // id="result-select"
      // size='large'
      // value={result}
      // label="Result"
      onChange={e => { 
        const value = e.target.value;
        setResult(value);
        setFormData({
          food: 1,
          happiness: 2,
          money: -100,
          charity: 0,
          married: false,
        });
      }}
      sx={{width: '20em'}}
      select
      fullWidth
      margin='dense'
    >
    </TextField>
  )
}

export default BobaShop;
