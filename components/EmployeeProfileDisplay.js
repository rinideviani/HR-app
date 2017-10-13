import React from "react";
import ReactDOM from "react-dom";  

//added for display 
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar'; 
 
  

export default class EmployeeProfileDisplay extends React.Component{ 
 
  render(){  
      //console.log("userprops",this.props); 
      const hiredDate = new Date(this.props.hiredDate); 
      const dob = new Date(this.props.dob); 
 
 return( 

  <div style={{display: 'flex'}}>
   
      <MobileTearSheet height={1000}>
       <TextField  
        disabled={false}
         floatingLabelText="First Name"
         defaultValue={this.props.firstName}
       /><br />

       <TextField
        disabled={false}
        floatingLabelText="Last Name"
        defaultValue={this.props.lastName} 
     /><br />

      <TextField
         disabled={false}
        floatingLabelText="Gender"
        defaultValue={this.props.gender}
     /><br />

    <DatePicker  
       disabled={false}
      floatingLabelText="DOB" 
      defaultDate={dob}
    /> 
       
    <TextField
       disabled={false}
        floatingLabelText="Nationality"
        defaultValue={this.props.nationality}
    /><br /> 

    <TextField
       disabled={false}
        floatingLabelText="Marital Status"
        defaultValue={this.props.maritalStatus}
    /><br />

    <TextField
       disabled={false}
        floatingLabelText="Phone"
        defaultValue={this.props.phone}
    /><br />
        
    </MobileTearSheet>
        
    <div>  
     <MobileTearSheet height={1000}>

       <TextField
        disabled={false}
        floatingLabelText="Subdivision"
        defaultValue={this.props.subdivision}
     /><br />

     <TextField
         disabled={false}
        floatingLabelText="Status"
        defaultValue={this.props.status}
      /><br />
 
      <TextField
        disabled={false}
        floatingLabelText="Suspend Date"
        defaultValue={this.props.suspendDate}
     /><br />

     <DatePicker  
      disabled={false}
      floatingLabelText="Hired Date" 
      defaultDate={hiredDate}
     /> 
     
      <TextField
       disabled={false}
        floatingLabelText="Grade"
        defaultValue={this.props.grade}
      /><br />

      <TextField
       disabled={false}
        floatingLabelText="Division"
        defaultValue={this.props.division}
      /><br />

      <TextField
       disabled={false}
        floatingLabelText="Email"
        defaultValue={this.props.email}
      /><br />
           
    
    </MobileTearSheet>
  </div>
       
        <Avatar src={this.props.avatar} />
         
</div> 
 

      )

  }
}