/**An event loop is something that pulls stuff out of the queue and places it onto 
 * the function execution stack whenever the function stack becomes empty. */

/**JS is a synchronous [Line by line] language. but there are certain methods that
 * work asynchronously eg:- setTimeout()
 * so when making with this kind of method JS first moves synchronous code to 'stack'
 * and asynchronous code to webAPI.
 * After compiling codes from the stack, the codes from web API will move to the queue
 * then move to stack and compile.*/ 

/** Event Loop always checks whether the stack is empty or there is something
 * in queue or stack. this process is called Event Loop
 */

//Example

console.log('Log 1')
setTimeout(()=>{
    console.log('Log 2');
},1000)

console.log('Log 3');

// in the above example Log1 and Log3 will move to the stack and setTimeout() will be moved to the web API
//after 1000ms the Log2 inside setTimeout will be moved to the queue
//after clearing all the codes from the stack, the Log2 from the queue moved to the stack and executed

//output will be :
/**
 * Log 1
 * Log 3
 * log 2
 * 
 */