import React from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar'; 
import User from './User'; 

import {fetchUsers} from '../actions/UserActions';


export default class ProfileDetail extends React.Component{
  

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
  
   const { users } = this.state;
   console.log('statess...', this.state.users); 

if(Object.getOwnPropertyNames(this.state.users).length === 0){
      return (<div></div>) 
    } 
    const userNodes = this.state.users.map(function(user,index){
      return (
        <User 
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        gender={user.gender} 
        dob={user.dob}
        nationality={user.nationality}
        maritalStatus={user.maritalStatus}
        phone={user.phone}
        subdivision={user.subdivision}
        status={user.status}
        suspendDate={user.suspendDate}
        hiredDate={user.hiredDate}
        grade={user.grade}
        division={user.division}
        email={user.email}
        avatar={user.avatar}>
         
        </User>
      )
    }) 


return (
      <div>
          
        {userNodes}
       
      </div>
    )
 

  }
}
 
 