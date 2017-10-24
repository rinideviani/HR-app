import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton'; 
import DatePicker from 'material-ui/DatePicker'; 
import EmployeeGradeDisplayContent from './EmployeeGradeDisplayContent'



export default class EmployeeGradeDisplay extends React.Component{


 state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    adjustCheckboxes: false,
    height: '300px' 
  };


	render(){
    const tableStyle ={
      background: "none",
       width:"1000px" ,
       margin:"10px",
       height:"5px"
    };
      const tableBodyRowStyle={
        align:'right',  
        margin:"10px"
      }

 
const tableHeaderStyle2={
  width:"50px", 
}
const tableHeaderStyle3={
  width:"250px", 
}
const tableHeaderStyle4={
  width:"245px", 
}
const tableHeaderStyle5={
  width:"70px", 
}
       

      const startDate = new Date(this.props.startDate); 
      const endDate = new Date(this.props.endDate);  
      
    return (
 
          <TableHeader  style={tableBodyRowStyle} displaySelectAll={this.state.adjustCheckboxes} >
 
           <TableRow style={tableStyle} >
                 
                <TableHeaderColumn style={tableHeaderStyle2} > Grade </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle3} > Start Date </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle4} > End Date </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle5} > Action </TableHeaderColumn >
              </TableRow>
 
          </TableHeader>  


     )
 

	}
  
}