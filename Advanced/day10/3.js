let students = [
  { name: "Samrat", marks: 72 },
  { name: "Rahul", marks: 88 },
  { name: "Amit", marks: 65 },
  { name: "Priya", marks: 91 },
  { name: "Neha", marks: 79 }
];

let maxi=-Infinity;
let ans="";
for(let {name,marks} of students){
    if(maxi<marks){
    maxi=marks;
ans=name;
    }
}
console.log(ans);
