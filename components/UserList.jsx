import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userActions';

connect((store) => {
  // console.log("ins store",store.userReducer.users);
  return {
    users: store.todos.users
  }
})

 
export default class UserList extends React.Component{ 
  render(){
  	console.log('----');
	console.log(this.props.users);
    return (
      <div>
      UserList Component
      </div>
    )
  }
}