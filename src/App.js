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
  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({selectedNumber: event.currentTarget.value}, () => {
      this.props.dispatch({type:'GET_JSONPLACEHOLDER', payload: this.state.selectedNumber});
    })
  }

  // function that will take user selected number and send to saga to get information from api endpoint
  // contains validation
  // handleSubmit = (event) => {
  //   console.log('in handleSubmit');
    // if(this.state.selectedNumber !== ''){
    //   this.props.dispatch({type:'GET_JSONPLACEHOLDER', payload: this.state.selectedNumber});
    //   this.setState({
    //     selectedNumber: '',
    //   })
    // }
    // else{
    //   //todo: insert error validation alert
    // }
  // }



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
            <img src='/images/logo.png' align='center' className={classes.headerImage}></img>
            <Typography variant='h4' className={classes.headerTitle}>Front-End Developer Technical Problem</Typography>
            <Divider className={classes.headerDivider}/>
          </Grid>

          <Grid item className={classes.selectionGrid}>
            <Typography variant='h4' className={classes.headerTitle} align='center'>Please Choose A Number Between 1-20</Typography>
            {/* <TextField
              margin='normal'
              type='number'
              InputProps={{ inputProps: { min: 1, max: 100 } }}
              value={this.state.selectedNumber}
              onChange={this.handleChange}
              className={classes.textField}
            /> */}
          </Grid>

          <Grid item>
            <Button onClick={this.handleChange} value={1}>01</Button>
            <Button onClick={this.handleChange} value={2}>02</Button>
            <Button onClick={this.handleChange} value={3}>03</Button>
            <Button onClick={this.handleChange} value={4}>04</Button>
            <Button onClick={this.handleChange} value={5}>05</Button>
            <Button onClick={this.handleChange} value={6}>06</Button>
            <Button onClick={this.handleChange} value={7}>07</Button>
            <Button onClick={this.handleChange} value={8}>08</Button>
            <Button onClick={this.handleChange} value={9}>09</Button>
            <Button onClick={this.handleChange} value={10}>10</Button>
            <Button onClick={this.handleChange} value={11}>11</Button>
            <Button onClick={this.handleChange} value={12}>12</Button>
            <Button onClick={this.handleChange} value={13}>13</Button>
            <Button onClick={this.handleChange} value={14}>14</Button>
            <Button onClick={this.handleChange} value={15}>15</Button>
            <Button onClick={this.handleChange} value={16}>16</Button>
            <Button onClick={this.handleChange} value={17}>17</Button>
            <Button onClick={this.handleChange} value={18}>18</Button>
            <Button onClick={this.handleChange} value={19}>19</Button>
            <Button onClick={this.handleChange} value={20}>20</Button>
          </Grid>

          <Grid item>
            {this.props.reduxState.JSONPLACEHOLDERReducer.id ?
              <Card>
                <CardContent className={classes.cardContent}>
                  <Typography variant='h6' className={classes.cardTypographyHeader}>Title</Typography>
                  <Typography variant='h5' className={classes.cardTypography}>{this.props.reduxState.JSONPLACEHOLDERReducer.title}</Typography>
                  <Divider/>
                  <Typography variant='h6' className={classes.cardTypographyHeader}>Body</Typography>
                  <Typography variant='h5' className={classes.cardTypography}>{this.props.reduxState.JSONPLACEHOLDERReducer.body}</Typography>
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
    fontFamily: 'Montserrat', 
    color: 'black',
    height: '10vh',
    lineHeight: '10vh',
  },
  headerImage:{
    marginTop: 100,
  },
  headerDivider:{
    width: '100vw'
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },
  cardTypography:{
    fontFamily: 'Montserrat', 
  },
  cardTypographyHeader:{
    fontFamily: 'Montserrat', 
  },


});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(App));
