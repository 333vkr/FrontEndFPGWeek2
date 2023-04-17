/**Currying in JavaScript transforms a function with multiple arguments into a nested series of functions,
 * each taking a single argument. Currying helps you avoid passing the same variable multiple times,
 * and it helps you create a higher order function.
 * The number of arguments a function takes is also called arity.*/

//USE CASES
/**
 * 1. helps to pass same arguments again and agin
 * 2. helps to create higher order functions
 */

//curried funtion to add 3 numbers
const addNumbers = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
let sum = addNumbers(1)(2)(3);
console.log("Curried sum :", sum);
