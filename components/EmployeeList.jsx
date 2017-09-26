import React, {PropTypes} from 'react';

const EmployeeList = ({employees}) => {  
  return (
      <ul className="list-group">
        {employees.map(employee => 
          <li className="list-group-item" key={employee.id}>
            {employee.name}
          </li>
        )}
      </ul>
  );
};

EmployeeList.propTypes = {  
  employees: PropTypes.array.isRequired
};

export default EmployeeList;  