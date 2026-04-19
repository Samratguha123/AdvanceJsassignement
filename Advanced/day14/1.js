// Write a program that extracts the first two elements of an array and stores the rest in another array 
// using destructuring.

let arr=[1,2,3,4,5,6,7];
let [a,b,...rest]=arr;

let ans=[...rest];
console.log(a);
console.log(b);
console.log(ans);
