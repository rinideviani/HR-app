import React from 'react'; 
import EmployeeProfileDisplay from './EmployeeProfileDisplay';  
import {fetchUsers} from '../actions/UserActions';


export default class EmployeeProfileContainer extends React.Component{
   
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
        <EmployeeProfileDisplay 
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
         
        </EmployeeProfileDisplay>
      )
    }) 


return (
      <div>
          
        {userNodes}
       
      </div>
    )
 

  }
}
 
 