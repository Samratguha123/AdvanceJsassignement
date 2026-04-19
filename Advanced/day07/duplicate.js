// Write a program that removes all duplicate characters from a string. 

let str="aaaaaaabbbbbbbbbccccccccd";
let ans="";
str.split('').forEach((val)=>{
    if(!ans.includes(val)){
        ans=ans+val;
    }
})
console.log(ans);
