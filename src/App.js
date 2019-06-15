import React, {Component, Fragment} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
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
  //once state is set to user selected number, dispatches that number to saga to get from api endpoint
  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({selectedNumber: event.currentTarget.value}, () => {
      this.props.dispatch({type:'GET_JSONPLACEHOLDER', payload: this.state.selectedNumber});
    })
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
            <img src='/images/logo.png' alt='actustaf logo' align='center' className={classes.headerImage}></img>
            <Typography variant='h4' className={classes.headerTitle}>Front-End Developer Technical Problem</Typography>
            <Divider className={classes.headerDivider}/>
          </Grid>

          <Grid item className={classes.selectionGrid}>
            <Typography variant='h4' className={classes.headerTitle} align='center'>Please Choose A Number Between 1-20</Typography>
          </Grid>

          <Grid item align='center'>
            <Button onClick={this.handleChange} value={1} className={classes.button}>01</Button>
            <Button onClick={this.handleChange} value={2} className={classes.button}>02</Button>
            <Button onClick={this.handleChange} value={3} className={classes.button}>03</Button>
            <Button onClick={this.handleChange} value={4} className={classes.button}>04</Button>
            <Button onClick={this.handleChange} value={5} className={classes.button}>05</Button>
            <Button onClick={this.handleChange} value={6} className={classes.button}>06</Button>
            <Button onClick={this.handleChange} value={7} className={classes.button}>07</Button>
            <Button onClick={this.handleChange} value={8} className={classes.button}>08</Button>
            <Button onClick={this.handleChange} value={9} className={classes.button}>09</Button>
            <Button onClick={this.handleChange} value={10} className={classes.button}>10</Button>
            <Button onClick={this.handleChange} value={11} className={classes.button}>11</Button>
            <Button onClick={this.handleChange} value={12} className={classes.button}>12</Button>
            <Button onClick={this.handleChange} value={13} className={classes.button}>13</Button>
            <Button onClick={this.handleChange} value={14} className={classes.button}>14</Button>
            <Button onClick={this.handleChange} value={15} className={classes.button}>15</Button>
            <Button onClick={this.handleChange} value={16} className={classes.button}>16</Button>
            <Button onClick={this.handleChange} value={17} className={classes.button}>17</Button>
            <Button onClick={this.handleChange} value={18} className={classes.button}>18</Button>
            <Button onClick={this.handleChange} value={19} className={classes.button}>19</Button>
            <Button onClick={this.handleChange} value={20} className={classes.button}>20</Button>
          </Grid>

          <Grid item>
            {this.props.reduxState.JSONPLACEHOLDERReducer.id ? //conditionally render card based on contents of reducer
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant='h6' className={classes.cardTypographyHeader} align='center'>Number Chosen</Typography>
                  <Typography variant='h5' className={classes.cardTypography} align='center'>{this.props.reduxState.JSONPLACEHOLDERReducer.id}</Typography>
                  <Divider/>
                  <Typography variant='h6' className={classes.cardTypographyHeader} align='center'>Title</Typography>
                  <Typography variant='h5' className={classes.cardTypography} align='center'>{this.props.reduxState.JSONPLACEHOLDERReducer.title}</Typography>
                  <Divider/>
                  <Typography variant='h6' className={classes.cardTypographyHeader} align='center'>Body</Typography>
                  <Typography variant='h5' className={classes.cardTypography} align='center'>{this.props.reduxState.JSONPLACEHOLDERReducer.body}</Typography>
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
    height: '5vh',
    lineHeight: '5vh',
  },
  headerImage:{
    marginTop: 25,
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
    color: '#00ABE9',
  },
  cardTypographyHeader:{
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#F47E4D',
  },
  card:{
    width: '50vw',
    margin: '0 auto',
  },
  button:{
    '&:hover' : {
      backgroundColor: '#95CA4F',
    }
  }
});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(App));
