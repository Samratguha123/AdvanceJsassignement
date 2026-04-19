// Write a function that takes an unknown number of arguments using the rest parameter and returns their 
// sum. 


const sum=(...argu)=>{

let add=argu.reduce((acc,val)=>{
  return  acc=acc+val;
},0)
return add;

}

console.log(sum(1,2,3,4,5,6,67,8));
