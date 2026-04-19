// Write a program where a function returns another function that adds a specific number to its argument 




function outer(b){
    let a=b;

    return function inner(c){
      return a+c;
    }
}

let ans1=outer(10);
let ans2=ans1(20);

console.log(ans2);
