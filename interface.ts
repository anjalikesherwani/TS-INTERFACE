interface Person{
    firstname:string;
    lastname:string;
    age:number;
    jobTitle:string;
}
class Employee implements Person{
    constructor(public firstname:string,public lastname:string,public age:number,public jobTitle:string){}
}

let employee:Person = new Employee('Anjali','Kesherwani',26,'Trainee');
console.log(`Employee Name : ${employee.firstname}  ${employee.lastname}`);
console.log(`Employee Age : ${employee.age}`);
console.log(`Employee JobTitle : ${employee.jobTitle}`);