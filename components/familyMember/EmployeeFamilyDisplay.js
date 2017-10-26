import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker'; 

export default class EmployeeGradeDisplayContent
 extends React.Component{

  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    adjustCheckboxes: false,
    height: '300px' 
  };



 	render(){

		const styles = {
		  block: {
		    maxWidth: 250 
		  },
		  checkbox: {
		    marginBottom: 16 
		  } 
		}; 

		const dob = new Date(this.props.dob)


 		return(

 			<TableBody   
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          	>
             
            <TableRow>

                <TableRowColumn> {this.props.name}</TableRowColumn>
                <TableRowColumn>{this.props.gender} </TableRowColumn>
                
                <TableRowColumn>
                	 <DatePicker 
                      name="dob"
                      disabled={false} 
                      value={dob}
                  	  />
                </TableRowColumn>
                

                <TableRowColumn> {this.props.type}</TableRowColumn>
                
                <TableRowColumn>  
                	<Checkbox 
          				style={styles.checkbox}
          				checked={this.props.isActive}
        			/> 
                </TableRowColumn>
                 


             </TableRow>
               
          </TableBody> 
 

 		)


 	} 
 }

