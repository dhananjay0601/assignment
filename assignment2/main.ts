class User {
  firstName: string;
  lastName: string;
  age: number;
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

interface EmployeeDetails {
  designation: string;
  salary: number;
  officeTime: string;
  printEmployee: () => void;
}

class Employee extends User implements EmployeeDetails {
  designation: string;
  salary: number;
  officeTime: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    designation: string,
    salary: number,
    officeTime: string
  ) {
    super(firstName, lastName, age);
    this.designation = designation;
    this.salary = salary;
    this.officeTime = officeTime;
  }
  printEmployee() {
    console.log(
      `Name: ${this.firstName} ${this.lastName} \nAge: ${this.age} \nDesignation: ${this.designation} \nSalary: ${this.salary} \nOffice Time: ${this.officeTime}`
    );
  }
}

const employee = new Employee("Mayank", "Raj", 21, "SDE Intern", 50000, "10 AM to 7PM");
employee.printEmployee();