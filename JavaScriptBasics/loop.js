// ==============================
// JavaScript Loops
// ==============================

/**
 * Loops are used to repeat a block of code multiple times.
 * JavaScript supports:
 * 1. for
 * 2. while
 * 3. do...while
 * 4. for...of (ES6+)
 * 5. for...in
 * 6. Array.forEach()
 */

// ==============================
// 1. for loop
// ==============================

console.log(" for loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
// Output: 1 2 3 4 5

// Looping through an array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// ==============================
// 2. while loop
// ==============================

console.log("\n while loop:");
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}
// Output: 1 2 3

// ==============================
// 3. do...while loop
// ==============================

console.log("\n do...while loop:");
let num = 1;
do {
  console.log("Number is:", num);
  num++;
} while (num <= 3);
// Output: 1 2 3

// Even if condition is false, do...while runs once
let shouldRun = false;
do {
  console.log("Runs at least once!");
} while (shouldRun); // Output: Runs at least once!

// ==============================
// 4. for...of loop (for arrays, strings, iterable objects)
// ==============================

console.log("\n for...of loop:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}

const message = "Hi!";
for (const char of message) {
  console.log("Character:", char);
}

// ==============================
// 5. for...in loop (for objects, or index in arrays)
// ==============================

console.log("\n for...in loop:");
const person = {
  name: "Alice",
  age: 25,
  gender: "female",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// You can also use for...in on arrays (not recommended for order-sensitive logic)
for (const index in fruits) {
  console.log(`Fruit at index ${index}: ${fruits[index]}`);
}

// ==============================
// 6. Array.forEach() method
// ==============================

console.log("\n forEach loop:");
const animals = ["dog", "cat", "rabbit"];

animals.forEach(function (animal, index) {
  console.log(`Animal ${index + 1}: ${animal}`);
});

// With arrow function
animals.forEach((animal, i) => console.log(`Arrow Animal ${i}: ${animal}`));

// ==============================
// 7. Loop Control: break and continue
// ==============================

console.log("\n break and continue:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // skips the rest of loop body and goes to next iteration
  }
  if (i === 5) {
    console.log("Breaking at 5");
    break; // exits the loop completely
  }
  console.log("Number:", i);
}
// Output: 1, 2, Skipping 3, 4, Breaking at 5

// ==============================
// 8. Nested Loops
// ==============================

console.log("\n Nested loops:");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

// ==============================
// Summary of Loop Types
// ==============================

/**
 * for — traditional, good for indexed data
 * while — loop as long as condition is true
 * do...while — like while, but runs at least once
 * for...of — best for iterables (arrays, strings)
 * for...in — best for object properties
 * forEach — functional way to loop over arrays
 * break — exit the loop early
 * continue — skip current iteration
 */
