/**Recursion is a process of calling itself. A function that calls itself is called a recursive function.
 * A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
 * Once the condition is met, the function stops calling itself. This is called a base condition.
 */

//USE CASES
/**
 * 1. Find factorial
 * 2. create a countdown
 */

//find factorial function

const factorial = (num) => {
  if (num === 0) {
    return 1; //base condition
  } else {
    return num * factorial(num - 1); //calling function itself.
  }
};

const fact= factorial(3) //calling function
console.log('Factorial :',fact);


//Create count down
const countDown=(num)=>{
    console.log(num);
    const newNum=num-1

    if(newNum>0) //base condition
    {
        countDown(newNum)
    }
}
countDown(5)






