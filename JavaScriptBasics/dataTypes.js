// =====================================
// JavaScript Data Types
// =====================================

/**
 * 1. Primitive Data Types
 *    - Number
 *    - String
 *    - Boolean
 *    - Undefined
 *    - Null
 *    - Symbol
 *    - BigInt
 */

// --------------------
// Number
// --------------------
let num1 = 30; // Integer
let num2 = 1.333; // Float
let negative = -42;
console.log("Number examples:", num1, num2, negative); // 30 1.333 -42

// Special numeric values
console.log("Infinity:", 1 / 0); // Infinity
console.log("NaN (Not a Number):", "abc" / 3); // NaN

// --------------------
// String
// --------------------
let myCity = "Hanoï"; // Single quotes
let greeting = "Hello"; // Double quotes
let welcomeMessage = `Welcome to ${myCity}`; // Template literal
console.log("String examples:", myCity, greeting, welcomeMessage);

// --------------------
// Boolean
// --------------------
let isTrue = true;
let isFalse = false;
console.log("Boolean values:", isTrue, isFalse); // true false

// --------------------
// Undefined
// --------------------
let notDefined;
console.log("Undefined variable:", notDefined); // undefined

// --------------------
// Null
// --------------------
let emptyValue = null;
console.log("Null value:", emptyValue); // null

// --------------------
// Symbol (unique and immutable identifiers)
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("Symbol comparison (sym1 === sym2):", sym1 === sym2); // false

// --------------------
// BigInt (for large integers beyond Number.MAX_SAFE_INTEGER)
const big = 1234567890123456789012345678901234567890n;
console.log("BigInt value:", big);

/**
 * 2. Reference Data Types (Objects)
 *    - Object
 *    - Array
 *    - Function
 *    - Date
 *    - RegExp
 *    - Other (Map, Set, etc.)
 */

// --------------------
// Object
// --------------------
const person = {
  name: "John",
  age: 30,
};
console.log("Object:", person);
console.log("Object name:", person.name);

// --------------------
// Array
// --------------------
const colors = ["red", "green", "blue"];
console.log("Array:", colors);
console.log("Array[1]:", colors[1]); // green

// --------------------
// Function
// --------------------
function greet(name) {
  return `Hello, ${name}`;
}
console.log("Function call:", greet("Alice")); // Hello, Alice

// --------------------
// Date
// --------------------
const today = new Date();
console.log("Date object:", today);
console.log("Year:", today.getFullYear());

// --------------------
// Regular Expression
// --------------------
const regex = /hello/i; // case-insensitive
console.log("Regex test:", regex.test("Hello World")); // true

// --------------------
// Map (object with key-value pairs)
const map = new Map();
map.set("key1", "value1");
console.log("Map:", map);
console.log("Map get key1:", map.get("key1"));

// --------------------
// Set (collection of unique values)
const set = new Set([1, 2, 2, 3]);
console.log("Set:", set); // {1, 2, 3}

/**
 * 3. typeof Operator Summary
 */
console.log("\n🧪 typeof results:");
console.log("typeof 123:", typeof 123); // number
console.log("typeof 'abc':", typeof "abc"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object (quirk)
console.log("typeof Symbol():", typeof Symbol()); // symbol
console.log("typeof 10n:", typeof 10n); // bigint
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // object
console.log("typeof function(){}:", typeof function () {}); // function

/**
 * 🔍 Summary of JavaScript Data Types:
 *
 * 👉 Primitive Types:
 *    - Number
 *    - String
 *    - Boolean
 *    - Null
 *    - Undefined
 *    - Symbol
 *    - BigInt
 *
 * 👉 Reference Types:
 *    - Object
 *    - Array
 *    - Function
 *    - Date
 *    - RegExp
 *    - Map, Set, WeakMap, WeakSet, etc.
 */
