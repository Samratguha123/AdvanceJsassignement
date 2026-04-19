 let jsonString = '{"name":"Samrat","age":22,"skills":["JS","React","Node"]}';

 let str=JSON.parse(jsonString);

 let ans=JSON.stringify(str,null,2);
 console.log(ans);
 