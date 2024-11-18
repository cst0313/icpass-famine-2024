import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const PoliceStationPrison = ({ setFormData }) => {
  const [type, setType] = useState(true);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <TextField
        required
        id="amount-select"
        size='large'
        value={amount}
        label="Amount"
        onChange={e => {
          const value = e.target.value;
          setAmount(value);
          setFormData({
            food: -1,
            happiness: -1,
            money: 150 + value * 100,
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        {
          ([...Array(6).keys()]).map(i => 
            <MenuItem key={i} value={i}>{i}</MenuItem>
          )
        }
      </TextField>
    )
  }
export default PoliceStationPrison;
