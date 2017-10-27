 //mainSection 
import React, { Component, PropTypes } from 'react';  
import MobileTearSheet from './MobileTearSheet';  
import PageSearch  from './PageSearch';    

export default class MainSection extends React.Component{
   
    mainSectionCallBack = (keyData) => { 
          this.props.callBackFromMainSection(keyData);  
    } 
 

  render(){
  
    return(
       <div id="searchSection"> 

          <MobileTearSheet height={1000} style={{border: '1px solid #d9d9d9', borderBottom: 'none'}} >
            <PageSearch items={this.props.items} callBackFromSearchPage={this.mainSectionCallBack} />
          </MobileTearSheet>  

       </div> 
    ) 
  }

}
  
 