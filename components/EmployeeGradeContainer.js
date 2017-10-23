import React from 'react'; 
import EmployeeGradeDisplay from './EmployeeGradeDisplay'



export default class EmployeeGradeContainer extends React.Component{

	render(){

		 // console.log('grade',this.props.empId) 
		const  employee  = this.props.empId;

	if ( !employee )
    	{
      		return (<div>Please Select...</div>) 
    	} 

		return(
	 
			<EmployeeGradeDisplay
				 id={employee.id}
				 ds={employee.gradeHistory.ds}
				 currentGrade={employee.gradeHistory.currentGrade}
				 startDate={employee.gradeHistory.startDate}
				 endDate={employee.gradeHistory.endDate}


			>


			</EmployeeGradeDisplay>

	 
		)
	}
 
}
