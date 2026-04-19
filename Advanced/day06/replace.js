// Write a program that replaces all spaces in a sentence with -. 

let str="Samrat Guha Present";
let ans='';
let i=0;
while(i<str.length){
    ans=ans+str[i]
    if(str[i]===' '){
  ans=ans+'-'
    }
    i++;
}

console.log(ans);
