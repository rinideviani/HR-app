import React from 'react'; 
import EmployeeGradeDisplayContent from './EmployeeGradeDisplayContent'



export default class EmployeeGradeContainer extends React.Component{
 
	render(){  
 
		//console.log('grade iistory',this.props.employeeById) 
		const  employee  = this.props.employeeById;
		//const  employeeGradeHistory  = employee.firstName;
		//console.log('employeeGradeHistory',employeeGradeHistory) 
	
		if ( !employee )
	    	{
	      		return (<div></div>) 
	    	} 

		if(Object.getOwnPropertyNames(this.props.employeeById.gradeHistory).length === 0){
	      		return (<div></div>) 
	   	}  
	    	
	    	const userNodes = this.props.employeeById.gradeHistory.map(function(emp,index){

	    		return(
	    			<EmployeeGradeDisplayContent
	    			 key={emp.no}
					 ds={emp.ds}
					 currentGrade={emp.currentGrade}
					 startDate={emp.startDate}
					 endDate={emp.endDate}  
	    			> 
	    			</EmployeeGradeDisplayContent> 

	    		)
	    	})
  
		return( 
			<div>
				{userNodes}
		 	</div>
		)
	}
 
}
