let str="Samrat";

let i=0;
let cV=0,cC=0;
while(i<str.length){
   
let temp=str[i].toLocaleLowerCase();
if(temp==='a' || temp==='e' || temp==="i"|| temp==='o'|| temp==='u')cV++;
else cC++;

i++;

}

console.log(cV,cC);
