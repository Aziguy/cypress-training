// ==============================
// JavaScript Variables
// ==============================

/**
 * var
 * - Function-scoped
 * - Can be redeclared and reassigned
 * - Gets hoisted (initialized as undefined)
 */
var myCity = "Paris"; // Declare and assign
console.log("Initial var myCity:", myCity); // Paris

myCity = "London"; // Reassign is allowed
console.log("After reassignment:", myCity); // London

var myCity = "Berlin"; // Redeclaration is also allowed
console.log("After redeclaration:", myCity); // Berlin

/**
 * let
 * - Block-scoped
 * - Can be reassigned but NOT redeclared in the same scope
 * - Hoisted but not initialized (Temporal Dead Zone)
 */
let myAge = 37;
console.log("\nInitial let myAge:", myAge); // 37

myAge = 38; // Reassign is allowed
console.log("After reassignment:", myAge); // 38

// let myAge = 40; Error: Cannot redeclare block-scoped variable
// Uncommenting above line will cause a SyntaxError

/**
 * const
 * - Block-scoped
 * - Cannot be reassigned or redeclared
 * - Must be initialized at declaration
 */
const myGender = "Male";
console.log("\nconst myGender:", myGender); // Male

// myGender = "Female"; Error: Assignment to constant variable
// const myGender = "Other"; Error: Cannot redeclare

/**
 * const with objects or arrays
 * - The reference cannot be changed
 * - But the contents can be modified
 */
const user = {
  name: "Alice",
  age: 30
};
console.log("\nconst object user:", user);

// Modifying internal properties is allowed
user.age = 31;
console.log("Modified user.age:", user.age); // 31

// user = {}; Error: Assignment to constant variable

const colors = ["red", "blue"];
colors.push("green"); // Allowed
console.log("Modified const array:", colors); // ['red', 'blue', 'green']

// colors = ["yellow"]; Error

/**
 * Summary
 */
console.log("\nFinal values:");
console.log("myCity (var):", myCity);
console.log("myAge (let):", myAge);
console.log("myGender (const):", myGender);
console.log("user (const object):", user);
console.log("colors (const array):", colors);
