 //mainSection


import React, { Component, PropTypes } from 'react'; 

import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { Checkbox, List } from 'material-ui';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

//added for Selectable list 
import {ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

//import PropTypes from 'prop-types';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar'; 
import Divider from 'material-ui/Divider'; 

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import AutoComplete from 'material-ui/AutoComplete';
  
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
 
import { EmployeeDetailTab }  from './EmployeeDetailTab'; 
import PageSearch  from './PageSearch';  

import {fetchUsers} from '../actions/UserActions';



let SelectableList = makeSelectable(List);
 
const iconStyles={
    marginRight:15
};

 

const menuProps = {
  desktop: true,
  disableAutoFocus: true
};


export default class MainSection extends React.Component{
 
   
  constructor(){
    super(); 
    this.state={ users: [] };
  } 
  getUsersDetail(){
    fetchUsers().then((users) => {
      this.setState({ users });
    });
  }

 componentDidMount(){
  this.getUsersDetail();
 } 

    componentWillMount() {
      this.setState({ selectedIndex: this.props.defaultValue 
      });  
     }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index 
      });
    }; 


  render(){
 
 const { users } = this.state;
  // console.log('mainSection...', this.state.users); 
 

    return(
        <div id="mainSection"> 
          <div style={{display: 'flex'}}> 

              <MobileTearSheet style={{border: '1px solid #d9d9d9', borderBottom: 'none'}} >
                 <PageSearch  items={this.state.users}/>  
              </MobileTearSheet>   
          
            <div > <EmployeeDetailTab /> </div> 
            
          </div>  
        </div> 
    ) 
  }

}
  
 