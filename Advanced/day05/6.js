//  Demonstrate first-class functions by storing multiple functions in an array and calling them one by one. 
// Define some functions
function greet() {
    console.log("Hello!");
}

function sayBye() {
    console.log("Goodbye!");
}

function askName() {
    console.log("What is your name?");
}

// Store functions in an array
let functionsArray = [greet, sayBye, askName];

// Call each function one by one
for (let fn of functionsArray) {
    fn();  // calling the function
}