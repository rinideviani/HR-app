import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import UserList from './UserList';
import {fetchUsers} from '../actions/UserActions';
  

export default class UserPage extends React.Component{

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
   console.log('storing...', this.state.users);
 
    return ( 
      <div>
        <UserList users = {this.state.users} />
      </div>
 
    )
  }
}