const sum=(a,b,cb)=>{
let ans=cb(a,b);
return ans;
}

cb=(a,b)=>{
    return a+b;
}

console.log(sum(2,3,cb));
