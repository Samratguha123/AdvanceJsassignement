//  Write a program to create an array of objects representing students with name and marks, and print only 
// the names of students who scored more than 50. 
 
 
 
 
 let students = [
  { name: "Samrat", marks: 75 },
  { name: "Rahul", marks: 45 },
  { name: "Amit", marks: 60 },
  { name: "Priya", marks: 30 },
  { name: "Neha", marks: 85 }
];

for(let {name,marks}of students){

    if(marks>50){
        console.log(name);
        
    }
}