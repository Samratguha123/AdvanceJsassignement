// Write a program to remove duplicate values from an array using spread and Set. 


let arr=[1,1,1,11,2,2,2,2,2,2,23,3,3,3,3,3,4,4,44,4,5];
let ss=new Set(arr);


let ans=[...ss];
console.log(ans);



