/**A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 * A closure gives you access to an outer function's scope from an inner function.
 * Closures give you the ability to access an outer function’s scope from an inner function. */

//USE CASE
/**
 * 1. Higher order functions
 */

//Higher order functions

const floatingNumber=3.1574
const roundOff=(decimalNo)=>{  //this is a higher order function using closures
    return (num)=>{
        return Number(num.toFixed(decimalNo))
    }
}

const roundOff1=roundOff(2)
const roundOff2=roundOff(3)

let round1=roundOff1(floatingNumber)
let round2=roundOff2(floatingNumber)

console.log('Rounded No 1:',round1);
console.log('Rounded No 2:',round2);

/**here we closing over the argument to roundOff.
 * the argument preserved there in the closure even after the function is returned
 * and the child function used the argument.
*/