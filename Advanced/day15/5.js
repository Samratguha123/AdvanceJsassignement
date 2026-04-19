let users = [
    { name: "Samrat", age: 22, password: "12345" },
    { name: "Rahul", age: 25, password: "abcd" },
    { name: "Anita", age: 21, password: "xyz" }
];


function replacer(key,value){

    if(key==="password")return undefined;
    return value;
}

const ans=JSON.stringify(users,replacer,2);
console.log(typeof ans);
