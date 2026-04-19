let employees = [
  { name: "Samrat", department: "IT" },
  { name: "Rahul", department: "HR" },
  { name: "Amit", department: "IT" },
  { name: "Priya", department: "Finance" },
  { name: "Neha", department: "HR" }
];

let obj={};

for(let e of employees){
    if(!Object.keys(obj).includes(e.department)){
        obj[e.department]=[{...e}]
    }
    else{
           obj[e.department].push({...e}) 
    }
}
console.log(obj);
