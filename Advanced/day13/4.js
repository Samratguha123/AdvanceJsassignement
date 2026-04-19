// Write a program that copies an object using the spread operator (deep vs shallow copy case).

let obj={
    name:'samrat',
    age:20,
    add:{
        location:"Habra",
        pin:74326
    }
}

// let obj1={...obj};
// obj1.name="Rahul";
// obj1.add.location="kolkata";
// console.log(obj1);
 let obj2=JSON.parse(JSON.stringify(obj));
obj2.add.location="kolkata";
console.log(obj2);
console.log(obj);

