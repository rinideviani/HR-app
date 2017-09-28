import React from 'react';
import ReactDOM from 'react-dom';

import User from './User';

import {connect} from "react-redux"; 

import {fetchUsers} from "../actions/UserActions";






export default class UserList extends React.Component{
  
	 

  render(){
 
  
    if(Object.getOwnPropertyNames(this.props.users).length === 0){
      return (<div></div>)
    }
    const userNodes = this.props.users.map(function(user){
      return (
        <User firstname={user.first_name} lastname={user.last_name}
        key={user.id} avatar={user.avatar}>
        {user.first_name}
        </User>
      )
    })
 
    
    return (
      <div>
        <center>
        <h1 className="user-profile">User Profiles</h1>
        {userNodes}
      </center>
      </div>
    )
  }
}