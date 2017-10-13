 //mainSection


import React, { Component, PropTypes } from 'react'; 

import {List, makeSelectable} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet'; 
 
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

   

  render(){
 
     console.log('indexnya',this.state.users);

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
  
 