import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ToDoListItem from './todolistitem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItemSecondaryAction } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';

class ToDoList extends Component {



  render(){
    // console.log('State is:', this.state);
    const {classes} = this.props;


    return (
      <Grid item className={classes.gridItemList}>
            <List className={classes.list}>
              <ListItem>
                  <ListItemAvatar>
                    <Typography style={{fontSize: 16, fontWeight: 'bold'}}>Task Number</Typography>
                  </ListItemAvatar>
                  <ListItemText
                      disableTypography
                      primary={<Typography style={{ fontSize: 16 , fontWeight: 'bold', marginRight: 35}} align='center'>Task</Typography>}
                  />
                  <ListItemAvatar>
                    <Typography style={{marginRight:25, fontSize: 16, fontWeight: 'bold'}} align='left'>Status</Typography>
                  </ListItemAvatar>
                  <ListItemSecondaryAction>
                  <ListItemAvatar>
                    <Typography align='right' style={{fontSize: 16, fontWeight: 'bold'}}>Delete</Typography>
                  </ListItemAvatar>
                  </ListItemSecondaryAction>
                </ListItem>
                
                {this.props.reduxState.JSONPLACEHOLDERReducer.map( (item) =>
                    <ToDoListItem key={item.id} item={item}/> 
                )}
            </List>
    
      </Grid>
    );
  }
}

const styles = theme => ({
  list:{
    width: '75vw',
    minWidth: 400,
    margin: '0 auto',
  },
  gridItemList:{
    width: '100vw',
    marginLeft: 30,
  }
});


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps)(withStyles(styles)(ToDoList));
