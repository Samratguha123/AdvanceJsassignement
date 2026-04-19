// Step 1: Create an array of objects
let arr = [
    { name: "Samrat", age: 22 },
    { name: "Rahul", age: 25 },
    { name: "Anita", age: 21 }
];


let jsonData = JSON.stringify(arr);
console.log("JSON String:", jsonData);

let newArray = JSON.parse(jsonData);
console.log("Back to Array:", newArray);