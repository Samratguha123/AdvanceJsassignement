// Write a program to count how many times a specific word occurs in a paragraph using split() 


let str="aaaaabcd";
let count=0

str.split('').forEach(val=>{
    if(val==='a')count++;
})

console.log(count);
