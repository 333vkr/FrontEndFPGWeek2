/**
 * A language is called Dynamically typed if the ‘type’ of a variable is checked only during the runtime
  unlike at compile time in a statically typed language. 
  With this support, the developers need not specify the data type of any variable while writing the code.
  It also supports changing the datatype of variables at runtime as well.
 */

  //USE CASE

  //we can create some variables without specifying their data type

  let userName='A'
  let age=28;
  let isMarried=false

  console.log('Type of name :', typeof userName); //string
  console.log('Type of age :', typeof age); //number
  console.log('Type of isMarried :', typeof isMarried); //boolean

  //we can change the data type also
  isMarried='Married'
  console.log('Value of isMarried :',isMarried); //Married
  console.log('Type of isMarried :',typeof isMarried); //string