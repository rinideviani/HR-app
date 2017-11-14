export default class EmployeesApi {  
  static getAllEmployees() {
    return fetch('http://localhost:8000/employees').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

 