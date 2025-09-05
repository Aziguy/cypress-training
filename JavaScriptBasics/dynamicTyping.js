// ================================
// JavaScript Dynamic Typing
// ================================

/**
 * In statically typed languages (like Java or C#), you must declare the variable type:
 *   int age = 30;
 * But in JavaScript:
 */
let myVar;

console.log("Initial value:", myVar); // undefined
console.log("Initial type:", typeof myVar); // undefined

// Assign a number
myVar = 42;
console.log("\nAfter assigning a number:");
console.log("Value:", myVar); // 42
console.log("Type:", typeof myVar); // number

// Assign a string
myVar = "Hello, world!";
console.log("\nAfter assigning a string:");
console.log("Value:", myVar); // Hello, world!
console.log("Type:", typeof myVar); // string

// Assign a boolean
myVar = true;
console.log("\nAfter assigning a boolean:");
console.log("Value:", myVar); // true
console.log("Type:", typeof myVar); // boolean

// Assign an object
myVar = { name: "Alice", age: 25 };
console.log("\nAfter assigning an object:");
console.log("Value:", myVar); // { name: "Alice", age: 25 }
console.log("Type:", typeof myVar); // object

// Assign an array
myVar = [1, 2, 3];
console.log("\nAfter assigning an array:");
console.log("Value:", myVar); // [1, 2, 3]
console.log("Type:", typeof myVar); // object (arrays are objects)

// Assign a function
myVar = function () {
  return "I'm a function";
};
console.log("\nAfter assigning a function:");
console.log("Value:", myVar()); // I'm a function
console.log("Type:", typeof myVar); // function

// Assign null
myVar = null;
console.log("\nAfter assigning null:");
console.log("Value:", myVar); // null
console.log("Type:", typeof myVar); // object (quirky JS behavior)

/**
 * Even constants (const) are dynamically typed, but cannot be reassigned:
 */
const dynamicConst = 100;
console.log("\nconst dynamicConst type:", typeof dynamicConst); // number

// dynamicConst = "text"; Error: Assignment to constant variable
