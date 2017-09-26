export class EmployeesApi {  
  static getAllEmployees() {
    return fetch('http://localhost:9000/employees').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

 