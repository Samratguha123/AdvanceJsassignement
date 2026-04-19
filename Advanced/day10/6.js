// Write a program that filters out employees earning less than a certain salary from an array of employee 
//objects.



let employees = [
  { name: "Samrat", salary: 50000 },
  { name: "Rahul", salary: 30000 },
  { name: "Amit", salary: 70000 },
  { name: "Priya", salary: 25000 },
  { name: "Neha", salary: 60000 }
];

let obj=[];

let certainSalary=45000;

for(let per of employees){
    if(per.salary>certainSalary){
        obj.push({...per})
        
    }
}
console.log(obj);


