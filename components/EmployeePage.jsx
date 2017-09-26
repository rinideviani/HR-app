import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as TodoActions from '../actions/todos'; 
import EmployeeList from './EmployeeList';


export default class EmployeesPage extends React.Component {  
  render() {
   return (
      <div className="col-md-12">
        <h1>Employees</h1>
        <div className="col-md-4">
          <EmployeeList employees={this.props.employees} />
        </div>
      </div>
    );
  }
}


EmployeesPage.propTypes = {
employees: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
return {
    employees: state.employees
  };


} 

 