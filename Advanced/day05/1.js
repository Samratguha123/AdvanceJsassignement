// Write a named function that checks whether a string is a palindrome or not.

const palimdrom=(str)=>{

    let i=0;
    let j=str.length-1;
    while(i<str.length){
        if(str[i]!==str[j]) return false;
        i++;
        j--;
    }
    return true;
}

const ans=palimdrom("MADAM")?"YES":"NO";
console.log(ans);

