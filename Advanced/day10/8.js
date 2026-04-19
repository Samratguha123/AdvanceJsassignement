let products = [
  { name: "Laptop", inStock: true },
  { name: "Mobile", inStock: true },
  { name: "Tablet", inStock: false },
  { name: "Headphones", inStock: true },
  { name: "Keyboard", inStock: true }
];

let stock=[];


for(let prod of products){
    if(prod.inStock){
        stock.push({...prod});
    }
}

console.log(stock);
