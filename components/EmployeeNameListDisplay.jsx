import React from "react";
import ReactDOM from "react-dom";  

//added for display  
import {List, ListItem} from 'material-ui/List'; 
import Avatar from 'material-ui/Avatar'; 

import {  makeSelectable } from 'material-ui/List'; 
 
let SelectableList = makeSelectable(List); 

export default class EmployeeNameListDisplay extends React.Component{ 
 
  render(){  
    return(   
        <SelectableList defaultValue={0}
            className="list-group-item" key={this.props.id}>   
              <ListItem
                value={this.props.id} 
                primaryText={this.props.firstName+" "+this.props.lastName}
                leftAvatar={<Avatar src={this.props.avatar}/>}
               />     
        </SelectableList>  
    )

  }
}