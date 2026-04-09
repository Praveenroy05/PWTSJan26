"use strict";
// Class - Blueprint to create an Object
// ES 6 - EMCA SCRIPT 6 - 2015
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees1 = void 0;
// Class is a collection of properties (Variable) and methods (Function)
// ClassName should be similar to the filename (Employess.ts). Class name should be Employee and it should always starts with Capital letter
// Whenever you create a variables in class, we do not need to mention let/const keyword
// Access Modifier -  It is permission to access a variable and method
// public - default - can be accessible everywhere
// private - Can only be accessible inside the same class
// readonly - Cannot be modified
// static - Doesn't belongs to the class. It cannot be accessible by an object of a class. You access static varibake or mwthod by using the ClassName. 
// Ex: - ClassName.key3
//const i =10
// Syntax to create a class:
/*

export class ClassName{

  // properties - variables - Locator (in PW) - is not mandatory in JS but mandatory in TS
    key :datatype = value
    key1:datatype
    private key2:datatype
    static key3:datatype = value
    readonly key4:datatype

    // Constructor - It is a special method which is used to initialize the properties of a class. It is automatically called when an object of the class is created. It can take parameters to initialize the properties of the class.

    constructor(key1:datatype, key2:datatype, key4:datatype){
    // this - It is a keyword which refers to the current instance of the class.
        
         this.key1 = key1
         this.key2 = key2
         this.key4 = key4
    }

  // methods - function -

  functionName(){
  .....
  }

  static functionName1(){
  }



  const obj = new ClassName(key1, key2, key4)
  obj.key
  obj.key1
  obj.functionName()
  Employee.functionName1() - static method can be accessed by using the class name

}

*/
var Employees1 = /** @class */ (function () {
    function Employees1(id, name, age, salary, offer) {
        this.empid = id; // emp.empid = id
        this.empName = name; // emp.empName = name
        this.empAge = age; // emp.empAge = age
        this.empSalary = salary;
        this.offer = offer;
    }
    Employees1.prototype.employeeInformation = function () {
        console.log("Employee id is ".concat(this.empid, " and Employee name is ").concat(this.empName, " and Employee age is ").concat(this.empAge, " and Employee salary is ").concat(this.empSalary, " and Employee offer is ").concat(this.offer, " and Company name is ").concat(Employees1.companyName));
    };
    Employees1.displayCompanyName = function () {
        console.log("Company name is ".concat(Employees1.companyName));
    };
    Employees1.companyName = "ABC";
    return Employees1;
}());
exports.Employees1 = Employees1;
var emp = new Employees1(101, "Rahul", 25, 100000, 20000);
console.log(emp.empid);
console.log(emp.empName);
console.log(emp.offer);
console.log(emp.empSalary);
emp.employeeInformation();
Employees1.displayCompanyName();
emp.offer = 50000;
console.log(emp.offer);
