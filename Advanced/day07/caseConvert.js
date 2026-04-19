// Write a program to convert a string into title case (every word starts with uppercase). 

let str="SAMRAT";
let ans=str.split('');
let ans1=ans.map((val)=>val.toLowerCase());
let ans2=ans1.join('');
console.log(ans2);
