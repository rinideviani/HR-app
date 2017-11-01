import React from 'react'; 
import EmployeeWorkHistoryDisplay from './EmployeeWorkHistoryDisplay';   

export default class EmployeeWorkHistoryContainer extends React.Component{
  
	render(){

		const  employee  = this.props.employeeById;
	     
	    if ( !employee )
	        {
	            return (<div></div>) 
	        } 

	    if(Object.getOwnPropertyNames(this.props.employeeById).length === 0){
      return (<div></div>) 
    } 

	  const userNodes =  this.props.employeeById.workHistory.map(function(emp,index){
      return (
        <EmployeeWorkHistoryDisplay 
        	key={index}
        	startDate={emp.startDate}
        	endDate={emp.endDate}
        	company={emp.company}
        	jobName={emp.jobName}
        	 
        
         >
        </EmployeeWorkHistoryDisplay>
      )
    }) 
  
		return(

			<div>
	          
	        	{userNodes}
	       
	      	</div>

			 
		)
	}

  }

