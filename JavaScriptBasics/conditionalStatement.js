// =========================================
// JavaScript Conditional Statements
// =========================================

/**
 * Conditional statements are used to perform different actions
 * based on different conditions.
 * 
 * JavaScript supports:
 * - if
 * - if...else
 * - if...else if...else
 * - switch
 * - ternary (?:)
 */

// ===========================
// 1. if statement
// ===========================

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote."); // This will run
}

// ===========================
// 2. if...else statement
// ===========================

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella.");
}

// ===========================
// 3. if...else if...else statement
// ===========================

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C"); // This will run
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// ===========================
// 4. Nested if statements
// ===========================

let userLoggedIn = true;
let userRole = "admin";

if (userLoggedIn) {
  if (userRole === "admin") {
    console.log("Welcome, Admin.");
  } else {
    console.log("Welcome, User.");
  }
} else {
  console.log("Please log in.");
}

// ===========================
// 5. switch statement
// ===========================

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!"); // This will run
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day");
}

// ===========================
// 6. Ternary operator (?:)
// ===========================

let number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("Ternary result:", result); // Even

// Nested ternary (not recommended for complex logic)
let mark = 85;
let grade = mark >= 90 ? "A" :
            mark >= 80 ? "B" :
            mark >= 70 ? "C" : "F";
console.log("Nested Ternary Grade:", grade); // B

// ===========================
// 7. Truthy and Falsy values
// ===========================

// Falsy values: false, 0, '', null, undefined, NaN
// Everything else is truthy

let testValue = "";

if (testValue) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // This will run
}

let userName = "John";
if (userName) {
  console.log("Hello,", userName); // Hello, John
}

// ===========================
// 8. Short-circuit Evaluation
// ===========================

// Logical AND (&&) stops if the first is false
let isOnline = true;
isOnline && console.log("User is online"); // Will run

// Logical OR (||) stops if the first is true
let defaultName = userName || "Guest";
console.log("Welcome,", defaultName); // Welcome, John

// ===========================
// Summary
// ===========================

/**
 * Use `if` for simple condition checking.
 * Use `if...else if...else` for multiple branches.
 * Use `switch` when checking a variable against many fixed values.
 * Use ternary `? :` for short one-liner decisions.
 * Be mindful of truthy and falsy values in conditions.
 */
