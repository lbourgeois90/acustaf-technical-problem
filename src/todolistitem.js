import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ToDoListItem extends Component {

    state={
        completed: '',
        checked:false,
    }

    componentDidMount(){
        this.setState({
            completed: this.props.item.completed,
            checked: this.props.item.completed,
            id: this.props.item.id,
            title: this.props.item.title,
        })
    }

    handleCheck = (event) => {
        console.log('in handleCheck')
        this.setState({
            ...this.state,
            checked: !this.state.checked,
            completed:  !this.state.checked
        })
    }


  render(){
    console.log('Item is:', this.props.item);
    const {classes} = this.props;
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
                <ListItemIcon>
                  {this.props.item.id}
                </ListItemIcon>
                <ListItemText primary={this.props.item.title}/>
                <ListItemIcon>
                    {checkboxToDisplay}
                </ListItemIcon>
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
