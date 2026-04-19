//  Create a program where you use a default parameter to calculate compound interest (default interest 
// rate if not provided). 


const interest=(amount,time,rate=2)=>{
let ans=amount*((1+(1/100))**time);

return ans;

}

console.log(interest(1000,3,10));
