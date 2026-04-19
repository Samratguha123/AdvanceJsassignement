// Use a do-while loop to repeatedly ask the user for input until they type "exit".

do {

   let name = prompt("Enter your name:");
   console.log(name);
   
   if(name==='exit')break;
    
} while (true);