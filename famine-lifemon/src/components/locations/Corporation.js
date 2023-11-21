import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Corporation = ({ setFormData }) => {
  const [type, setType] = useState(0);
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
          setResult(0);
          setFormData({
            food: -1,
            happiness: -1,
            money: type === 0 ? 250 : type === 1 ? 220 : 150,
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
        <MenuItem key={0} value={0}>Banker</MenuItem>
        <MenuItem key={1} value={1}>Logistics Specialist</MenuItem>
        <MenuItem key={2} value={2}>Accountant</MenuItem>
      </TextField>
      {
        (type === 1) ?
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
                money: result === 0 ? 220 : result === 1 ? 150 : 80,
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
            <MenuItem key={0} value={0}>Advanced</MenuItem>
            <MenuItem key={1} value={1}>Normal</MenuItem>
            <MenuItem key={2} value={2}>Fail</MenuItem>
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
              food: -1,
              happiness: -1,
              money: type === 0 ? (
                result === 0 ? 250 : 50
              ) : (
                result === 0 ? 150 : 70
              ),
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
          <MenuItem key={0} value={0}>Successful</MenuItem>
          <MenuItem key={1} value={1}>Fail</MenuItem>
        </TextField>
      }
    </>
  )
}

export default Corporation;
