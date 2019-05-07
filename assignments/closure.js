// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function areaOfCircle() {
  const PI = 3.142;

  return function() {
    const radius = 5;
    return PI * radius * radius;
  }
}

const area = areaOfCircle();
console.log(area());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return () => {
    return ++count;
  }
};

const newCounter = counter();

console.log(newCounter()); 
console.log(newCounter()); 
console.log(newCounter()); 


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  return {
    incrementCount() {
      return ++count;
    },
    decrementCount() {
      return --count;
    }
  }
};

const countValue = counterFactory();
console.log(countValue.incrementCount());
console.log(countValue.incrementCount());
console.log(countValue.decrementCount());
