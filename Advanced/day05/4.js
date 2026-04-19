// Create a higher-order function that takes another function as input and executes it 3 times. 

function high(fn){

    fn();
    fn();
    fn();
}

function cb(){
    console.log('samrat');
    
}

high(cb);