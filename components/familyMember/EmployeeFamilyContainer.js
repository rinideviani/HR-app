import React from 'react'; 
import EmployeeFamilyDisplay  from './EmployeeFamilyDisplay'

export default class EmployeeGradeContainer 
extends React.Component{


	render(){

		const  employee  = this.props.employeeById;
		//const  employeeGradeHistory  = employee.firstName;
		//console.log('employeeGradeHistory',employeeGradeHistory) 
	
		if ( !employee )
	    	{
	      		return (<div></div>) 
	    	} 

		 


	   	const userNodes = this.props.employeeById.familyMember.map(function(emp,index){

	    		return(
	    			<EmployeeFamilyDisplay
	    			 key={emp.no}
					 name={emp.name}
					 gender={emp.gender}
					 dob={emp.dob}
					 type={emp.type}
					 isActive={emp.isActive}



	    			> 
	    			</EmployeeFamilyDisplay> 

	    		)
	    	})







		return(
			<div>
				{userNodes}
		 	</div>

		 )
	}





 }
