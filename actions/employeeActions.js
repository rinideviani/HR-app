 
import employeeApi from '../api/employeeApi';

export const fetchSuccess = (employees)=>{
	return{
		type:'LOAD_EMP',employees
	}
};


export function loadEmployees() {  
  return function(dispatch) {
    return employeeApi.getAllEmployees().then(employees => {
      dispatch(fetchSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}