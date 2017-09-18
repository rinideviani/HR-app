import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { Checkbox, List } from 'material-ui';

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

let SelectableList = makeSelectable(List);
 
const iconStyles={
    marginRight:15
};


  const emp = [
  'Kerem Suer',
  'Eric Hoffman',
  'Raquel Parrad',
  'Kerem Suer'
   
];

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
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
    
  <div>
    <MobileTearSheet>
     <SelectableList defaultValue={0}>
        <Subheader>
          <Toolbar> 
              <ToolbarGroup> 
                   <AutoComplete
                     hintText="Search"
                     dataSource={emp}
                       menuProps={menuProps}
                    />  
                  <FontIcon  className="muidocs-icon-action-home"
                    color={blue500}  />

                <Badge badgeContent={999}
                    primary={true} >  
                </Badge>
              </ToolbarGroup>
               
            </Toolbar>
        </Subheader>
        
      <ListItem
        value={1}
        primaryText={emp[0]}
        leftAvatar={<Avatar src="images/ok-128.jpg" />} 
      /> 
      <ListItem
        value={2}
        primaryText={emp[1]}
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
      <ListItem
        value={3}
        primaryText={emp[2]}
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        value={4}
        primaryText={emp[3]}
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
      />
    </SelectableList>
    
   </MobileTearSheet>  
     
  </div>
);
 
export default MainSection;
