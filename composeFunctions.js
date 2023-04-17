/**it is the process of combining two or more functions and producing a new function.
 * Compose will take the output from one function and automatically patch it to the
 * input of the next function and repeat that process again and again until it spits out the final value.
 */

//USE CASE
//calculate square of a number's double


//Example
//function composition of calculating double and square

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x); //composed function
const double = (x) => x * 2; //fn to find double
const square = (x) => x * x; //fn to find square

//function composition
let result=compose(square,double)(3)

console.log('Square :',result); // (3*2)*(3*2) => 36