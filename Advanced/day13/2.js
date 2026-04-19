//  Write a function that finds the maximum number from an array using the spread operator.

const findMaxNumber=(...argu)=>{
let maxi=argu.reduce((acc,val)=>{
if(acc<val){
    acc=val;
}
return acc;

},-Infinity)

return maxi;
}

console.log(findMaxNumber(1,2,3,4,5,67,8,90));
