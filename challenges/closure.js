// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Because of function scope, the variable internal is inside of the parent function of myFunction so it can access the variables inside of its parent function. 
// It could not go from child function to parent function though




/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function counter(num) {
  for(let i = 0;i<=num;i++)
  return i++;
 }

 console.log(counter(5))