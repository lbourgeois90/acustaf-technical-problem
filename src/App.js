import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {

  state={
    selectedNumber: '',
  }

  //function that handles the change of the textfield-- sets state based on user selected number
  handleChange = (propertyName) => {
    return (event) => {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value,
      })
    }
  }

  //function that will take user selected number and send to saga to get information from api endpoint
  //contains validation
  handleSubmit = (event) => {
    console.log('in handleSubmit');
    if(this.state.selectedNumber !== ''){
      this.props.dispatch({type:'GET_JSONPLACEHOLDER'});
    }
    else{
      //todo: insert error validation alert
    }
  }



  render(){
    console.log('State is:', this.state)
    return (
      <Grid spacing={10}
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
              value={this.state.selectedNumber}
              onChange={this.handleChange('selectedNumber')}
            />
            <Button variant="outlined" onClick={this.handleSubmit}>
              Submit
            </Button>
            
          </Grid>
        









      </Grid>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(App);
