import React, {Component, Fragment} from 'react';
import './App.css';
import {connect} from 'react-redux';
import ToDoList from './ToDo/todolist';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import swal from 'sweetalert';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faSquare, faTrashAlt);


class App extends Component {

  state={
    // selectedNumber: '',
    newTask: '',
  }

  componentDidMount(){
    this.props.dispatch({type:'GET_JSONPLACEHOLDER_TODOS'})
  }

  //function that handles the change of the textfield-- sets state based on user selected number
  //once state is set to user selected number, dispatches that number to saga to get from api endpoint
  // handleChange = (event) => {
  //   // console.log('in handleChange');
  //   this.setState({selectedNumber: event.currentTarget.value}, () => {
  //     this.props.dispatch({type:'GET_JSONPLACEHOLDER_PHOTOS', payload: this.state.selectedNumber});
  //   })
  // }

  handleNewTask = (propertyName) => {
    return (event) => {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value,
      })
    }
  }

  handleSubmit = (event) => {
    if(this.state.newTask !== ''){
      this.props.dispatch({type: 'POST_JSONPLACEHOLDER_TODOS', payload: this.state.newTask})
      this.clearInputs()
      swal({
        title: "Task Has Been Created!",
        icon: "success",
      })
    }
    else{
      swal({
        title: "Please enter a task before submission!",
        icon: "warning",
      })
    }
  }

  clearInputs = () => {
    this.setState({
      newTask: '',
    })
  }

  


  render(){
    // console.log('State is:', this.state);
    const {classes} = this.props;


    return (
      <Grid spacing={8}
        container
        direction='column'
        justify='center'
        alignItems='center'>

          <Grid item align='center' className={classes.headerGridItem}>
            <img src='/images/logo.png' alt='actustaf logo' align='center' className={classes.headerImage}></img>
            <Typography variant='h4' className={classes.headerTitle}>Front-End Developer Technical Problem</Typography>
          </Grid>

          <Grid item className={classes.selectionGrid}>
            <Typography variant='h4' className={classes.headerTitle} align='center'>JSONPlaceholder To-Do List</Typography>
          </Grid>

          {/* <Grid item align='center'>
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
                  <Typography variant='h6' className={classes.cardTypographyHeader} align='center'>Photo</Typography>
                  <Typography variant='h5' className={classes.cardTypography} align='center'><img src={this.props.reduxState.JSONPLACEHOLDERReducer.url} width='50%' height='50%'></img></Typography>
                </CardContent>
              </Card>
              :
              <Fragment></Fragment>
            }
          </Grid> */}

          <Grid item>

            <Typography variant='h6' className={classes.headerTitle} align='center'>Create A New Task</Typography>

            <TextField
              value={this.state.newTask}
              onChange={this.handleNewTask('newTask')}
              margin='normal'
              variant='outlined'
              style={{width:'50vw', minWidth: 400}}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />

            <Button 
              onClick={this.handleSubmit} 
              variant='outlined' 
              className={classes.button} 
              style={{borderColor: '#05AAE7'}}>
                Submit Task
            </Button>





          </Grid>

          <Grid item>
          {this.props.reduxState.JSONPLACEHOLDERReducer[0] ? //conditionally render card based on contents of reducer
            <ToDoList/>
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
  headerGridItem:{
    borderBottom: '2px solid rgb(173, 171, 170, 0.8)',
    width: '100vw',
  },
  headerImage:{
    marginTop: 25,
  },
  button: {
    '&:hover' : {
      backgroundColor: 'rgb(173, 171, 170, 0.4)',
    },
    display: 'block',
    margin: '0 auto',
    marginTop: 15,
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: '#05AAE7'
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "rgb(173, 171, 170, 0.4)" //hovered
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#05AAE7" //focused
    }
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
  // cardTypography:{
  //   fontFamily: 'Montserrat',
  //   color: '#00ABE9',
  // },
  // cardTypographyHeader:{
  //   fontFamily: 'Montserrat',
  //   fontWeight: 'bold',
  //   color: '#F47E4D',
  // },
  // card:{
  //   width: '50vw',
  //   margin: '0 auto',
  // },
});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(App));
