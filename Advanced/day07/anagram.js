//Create a program that checks whether two strings are anagrams of each other. 
let str='samrat';
let str1='amstrak';

let ans1=str.split('').sort((a,b)=>a.localeCompare(b)).join('');
let ans2=str1.split('').sort((a,b)=>a.localeCompare(b)).join('');
if(ans1===ans2){
    console.log('Valid anagram');
    
}else {
    console.log("Not anagram");
    
}