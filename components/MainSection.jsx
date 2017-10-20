 //mainSection


import React, { Component, PropTypes } from 'react'; 

import {List, makeSelectable} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet'; 
 

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
   
    mainSectionCallBack = (keyData) => {
        
          this.props.callBackFromMainSection(keyData); 
          // console.log('callback in mainSection', keyData)
    } 
 

  render(){
  
    return(
       <div id="searchSection"> 

          <MobileTearSheet style={{border: '1px solid #d9d9d9', borderBottom: 'none'}} >
            <PageSearch items={this.props.items} callBackFromSearchPage={this.mainSectionCallBack} />
          </MobileTearSheet>  

       </div> 
    ) 
  }

}
  
 