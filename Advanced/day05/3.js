// Write an anonymous function that sorts an array of numbers in ascending order. 

let arr=[1,10,2,30,50,6,7];

arr.sort(function(a,b){
    return a-b;
})

console.log(arr);
