/**Immediately Invoked Function Expression (IIFE), it’s a function that runs as soon as it’s defined.
 * IIFE has its scope
 */

//USE CASES
/**
 * 1. create closures
 * 2. create private and public methods
 * 3. avoid conflict of variable names between libraries and programes
 */

// example of an IIFE

//IIFE to log input to the console

((data)=>{
    console.log('Input :',data);
})('India')