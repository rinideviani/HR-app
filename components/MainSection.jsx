import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

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
 
import  { TabsExampleControlled }  from './EmployeeDetailTab';
 
import Search from 'react-search';
import Programming from './PageSearch';

let SelectableList = makeSelectable(List);
 
const iconStyles={
    marginRight:15
};
 

const emp = [
           {id: 0, name: 'Kerem Suer' },
            {id: 1, name: 'Eric Hoffman' },
            {id: 2, name: 'Raquel Parrad' },
            {id: 3, name: 'Kareema Meidina' }
   
          ];

const menuProps = {
  desktop: true,
  disableAutoFocus: true
};



function wrapState(ComposedComponent) {
     
  return class SelectableList extends Component { 
      
      
       HiItems(items) {
    console.log(items)
  }
      static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired 
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue 
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index 
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent> 
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const MainSection = () => (
       
  <div id="mainSection">
     
   <div style={{display: 'flex'}}>
           
    <MobileTearSheet style={{border: '1px solid #d9d9d9', borderBottom: 'none'}} >
        <Programming items={emp} />  
   </MobileTearSheet>
       
     
       
       
       
  <div > <TabsExampleControlled />  </div> 
       
 </div>  
</div>
    
);
 
export default MainSection;
