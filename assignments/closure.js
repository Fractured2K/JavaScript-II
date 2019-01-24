// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let age = (age) => {
  const myAge = age;

  // debugger;
  let displayAge = () => {
    // debugger;
    return console.log(`I'm ${myAge} years old.`);
  }

  displayAge();
}
age(18);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return () => {
    return ++count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;

  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment() {
      return ++counter;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement() {
      return --counter;
    }
  }
};

let newCount = counterFactory();

console.log(newCount.increment())
console.log(newCount.increment())
console.log(newCount.increment())
console.log(newCount.increment())

console.log(newCount.decrement())

console.log(newCount.increment())
console.log(newCount.increment())
