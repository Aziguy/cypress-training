// ==============================
// JavaScript Scope
// ==============================

/**
 * Scope refers to the current context of execution.
 * The scope determines what variables, functions, and objects are accessible.
 */

// ------------------------------
// 1. Global Scope
// ------------------------------
console.log(" Global Scope:");

let globalVar = "I am a global variable";

function showGlobal() {
  console.log(globalVar); // Can access global variable
}

showGlobal(); // Output: I am a global variable
console.log(globalVar); // Accessible in global scope

// ------------------------------
// 2. Function Scope
// ------------------------------
console.log("\n Function Scope:");

function functionScope() {
  let funcVar = "I am inside a function";
  console.log(funcVar); // Accessible inside the function
}

functionScope(); // Output: I am inside a function

// Uncommenting the following line will throw an error:
// console.log(funcVar);  // Error: funcVar is not defined outside the function

// ------------------------------
// 3. Block Scope (let & const)
// ------------------------------
console.log("\n Block Scope with let & const:");

{
  let blockVar = "I am inside a block";
  const blockConst = "I'm a constant in the block";
  console.log(blockVar); // Accessible inside the block
  console.log(blockConst); // Accessible inside the block
}

// Uncommenting the following lines will throw errors:
// console.log(blockVar);     // Error: blockVar is not defined outside the block
// console.log(blockConst);   // Error: blockConst is not defined outside the block

// ------------------------------
// 4. Variable Hoisting & Scope
// ------------------------------
console.log("\n Hoisting and Scope:");

console.log(hoistedVar); // Output: undefined (hoisting happens in function or global scope)
var hoistedVar = "I am hoisted!";
console.log(hoistedVar); // Output: I am hoisted!

function hoistingExample() {
  console.log(hoistedFuncVar); // undefined
  var hoistedFuncVar = "Function scope hoisted!";
  console.log(hoistedFuncVar); // Function scope hoisted!
}

hoistingExample();

// Uncommenting the following will throw an error, since `let` and `const` are not hoisted:
// console.log(hoistedLet);  // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm not hoisted the same way!";
console.log(hoistedLet);

// ------------------------------
// 5. Lexical Scope (Closures)
// ------------------------------
console.log("\n Lexical Scope (Closures):");

function outerFunction() {
  let outerVar = "I am from the outer function";

  function innerFunction() {
    console.log(outerVar); // The inner function has access to outer function's scope (closure)
  }

  innerFunction(); // Output: I am from the outer function
}

outerFunction();

// ------------------------------
// 6. Global Scope vs Local Scope
// ------------------------------
console.log("\n Global vs Local Scope:");

let globalScopeVar = "Global Scope Variable";

function checkScope() {
  let localVar = "Local Scope Variable";
  console.log("Inside Function:");
  console.log(globalScopeVar); // Global variable is accessible
  console.log(localVar); // Local variable is accessible inside function
}

checkScope(); // Output: Global and Local variables

// Uncommenting the following will throw an error, since localVar is defined inside the function:
// console.log(localVar);  // Error: localVar is not defined

// ------------------------------
// 7. The 'this' Keyword and Scope
// ------------------------------
console.log("\n The 'this' keyword and scope:");

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName); // 'this' refers to the current object
  },
};

person.fullName(); // Output: John Doe

const anotherPerson = {
  firstName: "Alice",
  lastName: "Smith",
};

anotherPerson.fullName = person.fullName;
anotherPerson.fullName(); // Output: Alice Smith

// ------------------------------
// 8. Global Object (Window in Browsers)
// ------------------------------
console.log("\n The Global Object (window in browsers):");

console.log("Global object in browsers:", this); // Refers to the global object (window in browsers)

function testGlobal() {
  console.log(this); // 'this' refers to the global object inside a regular function
}

testGlobal(); // In browsers, it logs the global `window` object
