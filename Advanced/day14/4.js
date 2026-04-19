let user = {
  name: "Samrat",
  age: 23
};


let { name, age, city = "Kolkata" } = user;

console.log(name);  
console.log(age);   
console.log(city);  