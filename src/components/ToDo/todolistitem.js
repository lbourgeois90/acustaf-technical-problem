import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItemSecondaryAction } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';

class ToDoListItem extends Component {

    state={
        completed: '',
        checked: '',
    }

    // On intiialization of page, will set state to values of incoming props-- this is important if completely update method (would complete if using database)
    componentDidMount(){
        this.setState({
            completed: this.props.item.completed,
            checked: this.props.item.completed,
            id: this.props.item.id,
            title: this.props.item.title,
        })
    }

    //FUNCTION- handles checkboxes-- checkboxes are loaded onto dom based on completed status--changes state based on check of box
    //IF was using database, would dispatch PUT method to update data based on user input of checkbox
    handleCheck = (event) => {
      console.log('in handleCheck')
      this.setState({
          ...this.state,
          checked: !this.state.checked,
          completed:  !this.state.checked
      }, () => {
      this.props.dispatch({type:'UPDATE_JSONPLACEHOLDER_TODOS', payload: this.state});
      })
    }

    handleDelete = (event) => {
      console.log('in handleDelete');
      console.log(this.state.id)
      swal({
        title: "Are you sure you want to delete this task?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({type:'DELETE_JSONPLACEHOLDER_TODOS', payload: this.state.id})
          swal("Task has been deleted", {
            icon: "success",
          });
        } else {
          swal("Task was not deleted!");
        }
      });
    }

  render(){
    console.log('Item is:', this.props.item);
    // const {classes} = this.props;
    console.log('state is', this.state)

    let checkboxToDisplay = null;
    if(this.props.item.completed === true){
        checkboxToDisplay =  
            <Checkbox 
                onChange={this.handleCheck} 
                value={this.state.completed}
                checked={this.state.checked}
            />
    }
    else if (this.props.item.completed === false){
        checkboxToDisplay = 
            <Checkbox 
                onChange={this.handleCheck} 
                value={this.state.completed}
                checked={this.state.checked}
            />
    }

    return (
      <Grid item>
             <ListItem>
                <ListItemText>
                  {this.props.item.id}
                </ListItemText>
                <ListItemText primary={this.props.item.title}/>
                <ListItemIcon>
                    {checkboxToDisplay}
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label="Delete" onClick={this.handleDelete}>
                    <FontAwesomeIcon icon="trash-alt"/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
      </Grid>
    );
  }
}

const styles = theme => ({

});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(ToDoListItem));
