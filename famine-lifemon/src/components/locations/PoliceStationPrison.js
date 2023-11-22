import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const PoliceStationPrison = ({ setFormData }) => {
  const [type, setType] = useState(true);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

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
          setAmount(0);
          setResult(0);
          setFormData({
            food: value ? -1 : 0,
            happiness: value ? -1 : 0,
            money: value ? 150 : 50,
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
        <MenuItem key={0} value={true}>Police</MenuItem>
        <MenuItem key={1} value={false}>Prisoner</MenuItem>
      </TextField>
      {
        (type) ?
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
            {
              ([...Array(6).keys()]).map(i => 
                <MenuItem key={i} value={i}>{i}</MenuItem>
              )
            }
          </TextField> :
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
              food: 0,
              happiness: 0,
              money: (
                value === 0 ? 50 :
                value === 1 ? -200 :
                value === 2 ? -150 : 100
              ),
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
          <MenuItem key={0} value={0}>All Silent</MenuItem>
          <MenuItem key={1} value={1}>All Betray</MenuItem>
          <MenuItem key={2} value={2}>Some Silent</MenuItem>
          <MenuItem key={3} value={3}>Some Betray</MenuItem>
        </TextField>
      }
    </>
  )
}

export default PoliceStationPrison;
