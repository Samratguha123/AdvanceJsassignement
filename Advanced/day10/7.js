let people = [
  { name: "Samrat", age: 23 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 25 },
  { name: "Priya", age: 22 },
  { name: "Neha", age: 24 }
];



let person="samrat";

for(let per of people){
    if(per.name.toLowerCase()===person.toLowerCase()){
        per.age=45;
    }


}
console.log(people);
