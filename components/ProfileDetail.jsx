import React from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar'; 
import User from './User'; 
  
const ProfileDetail = () => ( 

  <div style={{display: 'flex'}}>
    <MobileTearSheet height={250}>
     <TextField  
        disabled={true}
        floatingLabelText="First Name"
        defaultValue=" "
    /><br />
    <TextField
       disabled={true}
        floatingLabelText="Last Name"
        defaultValue=" " 
    /><br />
    <TextField
       disabled={true}
        floatingLabelText="Gender"
        defaultValue=" "
    /><br />
    <DatePicker hintText="Date Of Birth" />
       
    <TextField
      hintText="Nationality" 
    /><br />
    <TextField
      hintText="Marital Status" 
    /><br />
    <TextField
      hintText="Phone" 
    /><br />
        
    </MobileTearSheet>
        
  <div>  
    <MobileTearSheet  height={250}  >
     <TextField
      hintText="Subdivision"  
    /><br />
    <TextField
      hintText="Status" 
    /><br />
      <TextField
      hintText="Suspend Date"  
    /><br />
    <DatePicker hintText="Hired Date" />
     
      <TextField
      hintText="Grade"  
    /><br />
      <TextField
      hintText="Division"  
    /><br />
      <TextField
      hintText="Email"  
    /><br />
           
    
    </MobileTearSheet>
  </div>
       
        <Avatar src="images/uxceo-128.jpg" />
         
</div>    
);

export default ProfileDetail;