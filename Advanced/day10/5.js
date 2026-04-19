//  Write a program that finds the average marks of all students in an array of objects. 
let students = [
  { name: "Samrat", marks: 70 },
  { name: "Rahul", marks: 55 },
  { name: "Amit", marks: 80 },
  { name: "Priya", marks: 65 },
  { name: "Neha", marks: 90 }
];

let mark=0;

for(let {marks} of students){
mark=mark+Number(marks);
}
console.log(mark/students.length);
