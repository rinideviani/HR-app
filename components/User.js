import React from "react";
import ReactDOM from "react-dom";  

//added for display

import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar'; 
  

export default class User extends React.Component{ 
 
  render(){ 

      console.log("userprops",this.props);

    return (
      <div> 

        <img src={this.props.avatar} className="avatar"/>
        <div className="username">
          {this.props.firstname} {this.props.lastname}
        </div>
        
      </div>
    )

  }
}