// Write a program that stringifies an object with nested properties and then parses it back. 
let obj={
    name:"samrat",
    add:{
        loc:"Habra"
    }
}

let ans=JSON.parse(JSON.stringify(obj));
console.log(ans);
