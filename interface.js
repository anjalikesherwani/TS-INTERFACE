var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, age, jobTitle) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    return Employee;
}());
var employee = new Employee('Anjali', 'Kesherwani', 26, 'Trainee');
console.log("Employee Name : ".concat(employee.firstname, "  ").concat(employee.lastname));
console.log("Employee Age : ".concat(employee.age));
console.log("Employee JobTitle : ".concat(employee.jobTitle));
