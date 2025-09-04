// ==============================
// JavaScript Functions
// ==============================

/**
 * Functions are blocks of code designed to perform a particular task.
 * - Functions can be declared, invoked, and may or may not return a value.
 */

// ------------------------------
// 1. Function Declaration
// ------------------------------
console.log(" Function Declaration:");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Calling the function

// ------------------------------
// 2. Function Expression
// ------------------------------
console.log("\n Function Expression:");

const sayGoodbye = function(name) {
  console.log(`Goodbye, ${name}!`);
};

sayGoodbye("Bob"); // Calling the function expression

// ------------------------------
// 3. Arrow Functions (ES6+)
// ------------------------------
console.log("\n Arrow Functions:");

const multiply = (a, b) => a * b;
console.log("Multiply 5 * 3:", multiply(5, 3));

const greetArrow = (name) => console.log(`Hi, ${name}!`);
greetArrow("Charlie");

// If a function takes one parameter, parentheses are optional:
const square = (n) => n * n;
console.log("Square of 4:", square(4));

// ------------------------------
// 4. Parameters & Arguments
// ------------------------------
console.log("\n Parameters and Arguments:");

function sum(a, b) {
  return a + b;
}

console.log("Sum of 10 + 5:", sum(10, 5)); // 15

// Function with default parameters
function greetWithDefault(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

greetWithDefault();         // Welcome, Guest!
greetWithDefault("Sara");    // Welcome, Sara!

// ------------------------------
// 5. Return Statement
// ------------------------------
console.log("\n Return Statement:");

function subtract(a, b) {
  return a - b;
}

let result = subtract(10, 3);
console.log("Subtraction result:", result); // 7

// Functions can return other functions
function outer() {
  return function inner() {
    console.log("I'm an inner function!");
  };
}

const innerFunc = outer();  // outer() returns inner()
innerFunc();                // I'm an inner function!

// ------------------------------
// 6. Function Scope & Closures
// ------------------------------
console.log("\n Scope and Closures:");

let globalVar = "I am a global variable";

function outerScope() {
  let outerVar = "I am from the outer scope";

  function innerScope() {
    console.log(globalVar);  // Accessing global variable
    console.log(outerVar);   // Accessing outer function's variable
  }

  innerScope();
}

outerScope();  // Global and outer variable are accessible within inner function

// ------------------------------
// 7. Higher-Order Functions
// ------------------------------
console.log("\n Higher-Order Functions:");

/**
 * A higher-order function is a function that:
 * 1. Takes one or more functions as arguments.
 * 2. Returns a function as its result.
 */

// Example 1: Passing function as an argument
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log("Addition using higher-order function:", applyOperation(5, 3, add)); // 8

// Example 2: Returning a function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log("Double 5:", double(5));  // 10

// ------------------------------
// 8. Function Expressions and IIFE (Immediately Invoked Function Expression)
// ------------------------------
console.log("\n IIFE (Immediately Invoked Function Expression):");

(function () {
  console.log("This function runs immediately!");
})();

// You can pass parameters to IIFE:
(function (name) {
  console.log(`Hello from IIFE, ${name}!`);
})("David");

// ------------------------------
// Summary of Function Types
// ------------------------------
/**
 * Function Declaration: `function name() {...}`
 * Function Expression: `const name = function() {...}`
 * Arrow Function: `(param1, param2) => {...}`
 * Default Parameters: `function name(param = defaultValue) {...}`
 * Return Statement: `return ...`
 * Closures: Functions that remember their outer function's variables
 * Higher-Order Functions: Functions that take functions as arguments or return them
 * IIFE (Immediately Invoked Function Expressions): Functions that run immediately after creation
 */

