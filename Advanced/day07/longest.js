// Write a program that finds the longest word in a sentence. 

let str="Samrat Guha is Good boy and want to be an Good devloper";

let i=0;

let temp="";
let ans="";
let maxi=-Infinity;

while(i<str.length){
if(str[i]===' '){
    if(maxi<temp.length){
        maxi=temp.length;
        ans=temp;
    }
    temp="";
}
else{
    temp=temp+str[i];
}

    i++;
}
if (maxi < temp.length) {
    ans = temp;
}
console.log(ans);
