import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ToDoListItem from './todolistitem';

class ToDoList extends Component {



  render(){
    // console.log('State is:', this.state);
    const {classes} = this.props;


    return (
      <Grid item>
            <List>
                {this.props.reduxState.JSONPLACEHOLDERReducer.map(item =>
                    <ToDoListItem key={item.id}/>
                )}
            </List>
    
      </Grid>
    );
  }
}

const styles = theme => ({

});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(ToDoList));
