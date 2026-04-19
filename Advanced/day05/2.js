// Create an arrow function that returns the factorial of a given number. 
const fact = (num) => {
    let fac = 1;
    if(num===1 || num===0)return 1;
    for (let i = 1; i <= num; i++) {
        fac = fac * i;
    }
    return fac;
}

console.log(fact(5));
