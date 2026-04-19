// Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).


let n=123;

let temp=n;

let sum=0;

while(temp){

    let rem=temp%10;
    sum=sum+rem
    temp=Math.floor(temp/10);
}

console.log(sum);
