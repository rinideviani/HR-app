import React from 'react'; 
import EmployeeProfileDisplay from './EmployeeProfileDisplay';   

export default class EmployeeProfileContainer extends React.Component{
  
  render(){
   // console.log('empId',this.props.empId) 
   const  employeeId  = this.props.empId;
   
    if ( !employeeId )
    {
      return (<div>Please Select...</div>) 
    } 
     
      return (
        <EmployeeProfileDisplay 
          key={employeeId.id}
          id={employeeId.id}
          firstName={employeeId.firstName}
          lastName={employeeId.lastName}
          gender={employeeId.gender} 
          dob={employeeId.dob}
          nationality={employeeId.nationality}
          maritalStatus={employeeId.maritalStatus}
          phone={employeeId.phone}
          subdivision={employeeId.subdivision}
          status={employeeId.status}
          suspendDate={employeeId.suspendDate}
          hiredDate={employeeId.hiredDate}
          grade={employeeId.grade}
          division={employeeId.division}
          email={employeeId.email}
          avatar={employeeId.avatar}> 
        </EmployeeProfileDisplay> 
      ) 
  }
}
 
 