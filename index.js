import axios from 'axios';

class StringManipulation {
  constructor() {}

  addDashesToStringAndLowerCase(str) {
    // lower case the string
    // find spaces and replace with -
    return str.replace(/\s+/g, '-').toLowerCase();
  }
}

// we can make as many children we want that inherit addDashesToStringAndLowerCase

class ChildOne extends StringManipulation {
  // can use addDashesToStringAndLowerCase
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
}

(async () => {
  const employee = await new ChildTwo();
  // call the method from the parent class called addDashesToStringAndLowerCase from the child to convert an employee name string
  console.log(
    employee.addDashesToStringAndLowerCase(employee.firstEmployee.employee_name)
  ); // prints 'tiger-nixon'
})();
