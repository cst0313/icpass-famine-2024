import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const FoodBank = ({ setFormData }) => {
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(-100);

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
            foodBank: value === 1 ? amount : value === 2 ? -1 : 0,
            happiness: value === 0 ? amount : value === 1 ? amount * 5 : 3,
            money: value === 0 ? amount * price : 0,
            charity: 0,
            married: false,
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
                foodBank: type === 1 ? value : 0,
                happiness: type === 0 ? value : value * 5,
                money: type === 0 ? value * price : 0,
                charity: type === 1 ? 5 * value : 0,
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
      }
      {
        (type === 0) &&
          <TextField
            required
            id="price-select"
            size='large'
            value={price}
            label="Price"
            onChange={e => {
              const value = e.target.value;
              setPrice(value);
              setFormData({
                food: type === 0 ? amount : -amount,
                foodBank: 0,
                happiness: type === 0 ? amount : amount * 5,
                money: type === 0 ? amount * value : 0,
                charity: 0,
                married: false,
              });
            }}
            sx={{width: '20em'}}
            select
            fullWidth
            margin='dense'
          >
            <MenuItem key={0} value={-100}> $100</MenuItem>
            <MenuItem key={1} value={-125}> $125</MenuItem>
            <MenuItem key={2} value={-150}> $150</MenuItem>
          </TextField>
      }
    </>
  )
}

export default FoodBank;
