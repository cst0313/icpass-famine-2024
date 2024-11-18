import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Factory = ({ setFormData }) => {
  const [type, setType] = useState(true);
  const [amount, setAmount] = useState(1);
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
          setAmount(1);
          setResult(true);
          setFormData({
            food: -1,
            happiness: -1,
            money: 30,
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={true}>Factory Worker</MenuItem>
        {}
      </TextField>
        {/* (type) ? */}
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
                money: value * 30,
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
              (Array.from({length: 5}, (_, i) => i + 1)).map(i => 
                <MenuItem key={i} value={i}>{i}</MenuItem>
              )
            }
          </TextField>
          {}
      </>
  )
}

export default Factory;
