import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import UserList from './UserList'

import {fetchUsers} from "../actions/UserActions"
 

@connect(
  (configureStore) => {
   //console.log("ins store",configureStore.rootReducer );
  return {
    users: configureStore.rootReducer
  }}

  )


export default class UserPage extends React.Component{
    
 componentWillMount(){
      this.props.dispatch(fetchUsers());
  }

  render(){

    console.log('---');
    console.log(this.props);
    return (
      <div>
      
      </div>
    )
  }
}