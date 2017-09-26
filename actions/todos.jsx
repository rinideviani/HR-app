import * as types from '../constants/ActionTypes';
import EmployeesApi from '../api/employeeApi';

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id };
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text };
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id };
}

export function completeAll() {
  return { type: types.COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}


//added for employees

export function loadEmployees() {  
  return function(dispatch) {
    return EmployeesApi.getAllEmployees().then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadEmployeesSuccess(employees){
	return {type: 'LOAD_EMPLOYEES_SUCCESS',employees};
}