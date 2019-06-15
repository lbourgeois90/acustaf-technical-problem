import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <Grid spacing={24}
      container
      direction='column'
      justify='center'
      alignItems='center'>

        <Grid item align='center'>
          <Typography variant='h4'>Acustaf Front-End Developer Technical Problem</Typography>
        </Grid>

        <Grid item>
          <TextField
            helperText='Choose a number between 1-100'
            margin='normal'
            type='number'
            InputProps={{ inputProps: { min: 1, max: 100 } }}
          />
          
        </Grid>
      









    </Grid>
  );
}

export default App;
