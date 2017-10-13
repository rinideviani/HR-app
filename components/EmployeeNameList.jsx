import React, { Component } from 'react';
 
import EmployeeNameListDisplay from './EmployeeNameListDisplay';



export default class EmployeeNameList extends React.Component{ 
  
    render(){     

     
      if(Object.getOwnPropertyNames(this.props).length === 0){
      return (<div></div>) 
    } 
 
       
  const result = this.props.emp.map(function(user,index) {
   return (  
    <EmployeeNameListDisplay 
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          avatar={user.avatar}>  
    </EmployeeNameListDisplay> 

    )
  }) 
 
    return(    
        <div>
           {result}
         </div>

     )  
 }
}
