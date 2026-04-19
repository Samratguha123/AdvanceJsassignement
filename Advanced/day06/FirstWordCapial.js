// Write a program that capitalizes the first letter of every word in a sentence.

let str="abc def ijkl";

let i=0;
let temp="";
let ans="";
while(i<str.length){
  if(temp.length===0){
    temp=temp+str[i].toUpperCase();
    i++;
    continue;
  } 
  


  if(str[i]===' '){
   ans=ans+temp+" ";
   temp="";
   i++;
   continue;
  }
    temp=temp+str[i];
  i++;
}
ans=ans+temp;


console.log(ans);
