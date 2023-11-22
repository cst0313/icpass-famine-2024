import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const FoodBank = ({ setFormData }) => {
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState(1);

  const prices = [-50, -75, -100, -125, -150];

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
            food: value === 0 ? amount : value === 1 ? -amount : 1,
            happiness: value === 0 ? amount : value === 1 ? amount * 5 : 3,
            money: value === 0 ? amount * prices[Math.floor(Math.random()*prices.length)] : 0,
            education: 0,
            charity: value === 0 ? 0 : value === 1 ? amount * 5 : 2,
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
        <MenuItem key={0} value={0}>Customer</MenuItem>
        <MenuItem key={1} value={1}>Donor</MenuItem>
        <MenuItem key={2} value={2}>Recipient</MenuItem>
      </TextField>
      {
        (type !== 2) &&
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
                food: type === 0 ? value : -value,
                happiness: type === 0 ? value : value * 5,
                money: type === 0 ? value * prices[Math.floor(Math.random()*prices.length)] : 0,
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
            {
              (Array.from({length: 5}, (_, i) => i + 1)).map(i => 
                <MenuItem key={i} value={i}>{i}</MenuItem>
              )
            }
          </TextField>
      }
    </>
  )
}

export default FoodBank;
