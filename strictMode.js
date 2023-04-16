/** Strict mode is a feature in JS that allows us to place a program or function in a 'strict' operating context
 *  This strict context prevents certain actions from being taken and throws more exceptions.
 *  The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
 */
/** Strict mode can be used in two ways
 * 1. Global scope 
 * 2. Functional scope
 */

/**Using strict mode in the entire script (Global scope) is to invoke strict mode for an entire script.
 * put the statement "use strict" before any other statements
 */

/** Using strict mode in a function(functional scope) is to invoke strict mode for a function.
 * put the statement "use strict" inside the function body before any other statements
 */

//USE CASES
/**
 * 1. Does not allow to create a global variable
 * 2. Does not allow deleting a variable, object or a function
 * 3. Does not allow duplicating a parameter name in functions
 */

//Does not allow creating global variables
"use strict"
newVariable='variable1'  //it will throw an error in strict mode

//does not allow deleting a variable, object or function
delete newVariable;  //it will throw an error

//Does not allow duplicating a parameter name in functions
function newFunction(x,x){  //this will throw an error
    console.log('New function triggered.');
}
newFunction()



//Strict mode in functional scope

function strictFunction(){
    'use strict' //the 'use strict' keyword declared here
    console.log('this is strict function');
}

