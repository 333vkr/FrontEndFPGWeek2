/**A higher order function is a function that takes one or more functions as arguments or returns a function as its result.
 * some build in higher order functions are
 * map()
 * filter()
 * reduce()
 */

//USE CASES
/**
 * Iterate through elements and render the elements 
 * filter out a specific set of elements under a condition
 * calculate sum or concatenate strings 
 */

//example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));  // [ 1, 3, 5, 7, 9, 11 ]