import React, {Component, Fragment} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

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
      this.props.dispatch({type:'GET_JSONPLACEHOLDER', payload: this.state.selectedNumber});
      this.setState({
        selectedNumber: '',
      })
    }
    else{
      //todo: insert error validation alert
    }
  }



  render(){
    console.log('State is:', this.state);
    const {classes} = this.props;
    return (
      <Grid spacing={10}
        container
        direction='column'
        justify='center'
        alignItems='center'>

          <Grid item align='center'>
            <Typography variant='h4' className={classes.headerTitle}>Acustaf Front-End Developer Technical Problem</Typography>
            <Divider className={classes.headerDivider}/>
          </Grid>

          <Grid item>
            <TextField
              helperText='Choose a number between 1-100'
              margin='normal'
              type='number'
              InputProps={{ inputProps: { min: 1, max: 100 } }}
              value={this.state.selectedNumber}
              onChange={this.handleChange('selectedNumber')}
              className={classes.textField}
            />
            <Button variant="outlined" onClick={this.handleSubmit} className={classes.button}>
              Submit
            </Button>
          </Grid>

          <Grid item>
            {this.props.reduxState.JSONPLACEHOLDERReducer.id ?
              <Card>
                <CardContent>
                  <Typography variant='h6'>Title</Typography>
                  <Typography variant='h5'>{this.props.reduxState.JSONPLACEHOLDERReducer.title}</Typography>
                  <Divider/>
                  <Typography variant='h6'>Body</Typography>
                  <Typography variant='h5'>{this.props.reduxState.JSONPLACEHOLDERReducer.body}</Typography>
                </CardContent>
              </Card>
              :
              <Fragment></Fragment>
            }
          </Grid>
        









      </Grid>
    );
  }
}

const styles = theme => ({
  headerTitle:{
    fontFamily: 'Merriweather', 
  },
  headerDivider:{
    width: '100vw'
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },


});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(App));
