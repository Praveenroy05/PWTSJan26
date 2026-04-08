import {Employees1} from '../Typescript/Employees1'

const obj1 = new Employees1(101,"Rahul", 25, 100000, 20000)
console.log(obj1.empid)
console.log(obj1.empName)
console.log(obj1.offer)
console.log(obj1.empSalary)
obj1.employeeInformation()
Employees1.displayCompanyName()

obj1.offer = 50000
console.log(obj1.offer)