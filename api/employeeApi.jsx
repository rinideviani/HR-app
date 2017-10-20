export default class EmployeesApi {  
  static getAllEmployees() {
    return fetch('http://localhost:9000/emp').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

 