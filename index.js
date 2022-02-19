import axios from 'axios';

class StringManipulation {
  constructor() {}

  addDashesToStringAndLowerCase(str) {
    // lower case the string
    // find spaces and replace with -
    return str.replace(/\s+/g, '-').toLowerCase();
  }
}

class ChildOne extends StringManipulation {
  constructor() {}
}

class ChildTwo extends StringManipulation {
  constructor() {
    // call super to run parents constructor
    super();
    this.firstEmployee = null;

    return (async () => {
      this.firstEmployee = await this.callAPI();
      return this;
    })();
  }

  callAPI() {
    return axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        const listOfEmployees = response.data.data;
        return listOfEmployees[0];
      })
      .catch((err) => console.log(err));
  }

  init() {
    this.callAPI();
  }
}

(async () => {
  const employee = await new ChildTwo();
  console.log(employee.firstEmployee.employee_name);
  console.log(
    employee.addDashesToStringAndLowerCase(employee.firstEmployee.employee_name)
  );
})();
