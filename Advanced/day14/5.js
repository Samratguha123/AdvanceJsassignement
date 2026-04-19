// Write a program to destructure a nested object (e.g., employee.address.city). 

let obj={
    name:"samrat",
    add:{
        loc:"Habra",
        pin:743268
    }
}
let {add}=obj;
let{loc,pin}=add;
console.log(loc);
console.log(pin);

