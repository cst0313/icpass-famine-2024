import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const School = ({ setFormData }) => {
  const [type, setType] = useState(-1);
  const [result, setResult] = useState(1);

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
            food: value,
            happiness: -1,
            money: 0,
            education: result,
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={-1}>Primary</MenuItem>
        <MenuItem key={1} value={-2}>Secondary</MenuItem>
        <MenuItem key={2} value={-3}>University</MenuItem>
      </TextField>
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
            food: type,
            happiness: -1,
            money: 0,
            education: value,
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={1}>Pass</MenuItem>
        <MenuItem key={1} value={0}>Fail</MenuItem>
      </TextField>
    </>
  )
}

export default School;
