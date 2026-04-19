// write a program that sorts an array of objects by a specific property (e.g., age). 




let people = [
  { name: "Samrat", age: 23 },
  { name: "Rahul", age: 19 },
  { name: "Amit", age: 27 },
  { name: "Priya", age: 21 },
  { name: "Neha", age: 25 }
];

let ans=people.sort((a,b)=>a-b)
console.log(ans);
