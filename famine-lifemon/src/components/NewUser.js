import * as React from 'react';
import {useState} from 'react';
import { Button, Paper, TextField, MenuItem } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { setDoc, doc } from 'firebase/firestore';

import { db } from '../database/firebase';

export default function NewUser(props) {
  const theme_3 = createTheme({
    typography: {
      fontFamily:'Ubuntu'
    }
  });
  const [name, setName] = useState("");
  
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = generateString(20);

    /* Randomize Stats*/
    const educations = [
      {education: 0, pct: 12}, // Primary    60%
      {education: 1, pct: 7},  // Secondary  30%
      {education: 2, pct: 1},  // University 5%
      {education: 3, pct: 0}   // Graduate   0%
    ];

    const moneyList = [
      {money: 100, pct: 14},
      {money: 200, pct: 5},
      {money: 500, pct: 1},
    ];

    const foods = [
      {food: 2, pct: 7},
      {food: 6, pct: 10},
      {food: 10, pct: 3},
    ];
    
    function handleRandom(table) {
      const expanded = table.flatMap(entry => Array(entry.pct).fill(entry));
      return expanded[Math.floor(Math.random() * expanded.length)];
    }
  

    setDoc(doc(db, "users", id), {
      name: name,
      group: group,
      food: handleRandom(foods).food,
      happiness: 5,
      money: handleRandom(moneyList).money,
      education: handleRandom(educations).education,
      charity: 0,
      showcharity: false,
      married: false,
      jailed: false
    });
    props.setId(id);
  }

  const [group, setGroup] = React.useState('');

  return (
    <>	
    <ThemeProvider theme = {theme_3}>
      <Paper elevation={0}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <TextField 
                required
                id="filled-basic"
                variant="outlined"
                sx={{width: '20em'}}
                size="large"
                label="Name"
                onChange={e => setName(e.target.value)}
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={8}>
            <TextField
                required
                id="demo-simple-select"
                size='large'
                value={group}
                label="Group"
                onChange={e => { setGroup(e.target.value) }}
                sx={{width: '20em'}}
                select
                fullWidth
                margin='dense'
              >
                <MenuItem value={1}>Group 1</MenuItem>
                <MenuItem value={2}>Group 2</MenuItem>
                <MenuItem value={3}>Group 3</MenuItem>
                <MenuItem value={4}>Group 4</MenuItem>
                <MenuItem value={5}>Group 5</MenuItem>
                <MenuItem value={6}>Group 6</MenuItem>
                <MenuItem value={7}>Group 7</MenuItem>
                <MenuItem value={8}>Group 8</MenuItem>
                <MenuItem value={9}>Group 9</MenuItem>
                <MenuItem value={10}>Group 10</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={8}>
              <Button
                variant="contained"
                type="submit"
                sx={{width: '20em'}}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </ThemeProvider>
    </>
  );
}