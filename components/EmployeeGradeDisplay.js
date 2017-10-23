import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';


 

import DatePicker from 'material-ui/DatePicker'; 

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
       margin:"10px"
    };
      const tableBodyRowStyle={
        align:'right',  
        margin:"10px"
      }
 
      const startDate = new Date(this.props.startDate); 
      const endDate = new Date(this.props.endDate);  
      
    return (

      <div style={{display: 'flex'}}  >
 
        <Table  style={tableStyle} 
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}

        >
          <TableHeader  style={tableBodyRowStyle} displaySelectAll={this.state.adjustCheckboxes} >


           <TableRow >
                <TableRowColumn>DS</TableRowColumn>
                <TableRowColumn>Grade</TableRowColumn>
                <TableRowColumn>Start Date</TableRowColumn>
                <TableRowColumn>End Date</TableRowColumn>
                <TableRowColumn>Action</TableRowColumn>
              </TableRow>


          </TableHeader>


          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
             
              <TableRow  
                        
                 >
                <TableRowColumn>{this.props.ds}</TableRowColumn>
                <TableRowColumn>{this.props.currentGrade}</TableRowColumn>
                <TableRowColumn >   
                 <  DatePicker name="startDate"
                    disabled={false} 
                    value={startDate}
                  />  

                </TableRowColumn>

                <TableRowColumn  > 
                  <  DatePicker 
                      name="endDate"
                    disabled={false} 
                    value={endDate}
                  />

                </TableRowColumn>

                <TableRowColumn>  </TableRowColumn>
              </TableRow>
               
          </TableBody>



        </Table>

      </div>


     )
 

	}
  
}