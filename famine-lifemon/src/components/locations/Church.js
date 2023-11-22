import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Church = ({ setFormData }) => {
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState(-1);

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
            food: value === 2 ? amount : 0,
            happiness: value === 0 ? 6 : value === 1 ? 3 : 0,
            money: 0,
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
        <MenuItem key={0} value={0}>Couple</MenuItem>
        <MenuItem key={1} value={1}>Family</MenuItem>
        <MenuItem key={2} value={2}>Minus Food</MenuItem>
      </TextField>

      {
        (type === 2) &&
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
              food: value,
              happiness: 0,
              money: 0,
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
          <MenuItem key={0} value={-1}>1</MenuItem>
          <MenuItem key={1} value={-2}>2</MenuItem>
          <MenuItem key={2} value={-3}>3</MenuItem>
        </TextField>
      }
    </>
  )
}

export default Church;
