// ==============================
// JavaScript Arrays
// ==============================

/**
 * An array is a special variable that can hold multiple values.
 * It’s an **ordered**, **indexed**, and **mutable** collection.
 */

console.log(" Creating Arrays:");

// ------------------------------
// 1. Creating Arrays
// ------------------------------
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);

let numbers = new Array(1, 2, 3, 4); // Using Array constructor
console.log("Numbers:", numbers);

let emptyArray = [];
console.log("Empty array:", emptyArray);

// ------------------------------
// 2. Accessing Elements
// ------------------------------
console.log("\n Accessing elements:");
console.log("First fruit:", fruits[0]); // apple
console.log("Second number:", numbers[1]); // 2

// ------------------------------
// 3. Modifying Elements
// ------------------------------
fruits[1] = "blueberry";
console.log("\n After modification:", fruits); // ['apple', 'blueberry', 'cherry']

// ------------------------------
// 4. Array Length
// ------------------------------
console.log("\n Array length:", fruits.length); // 3

// ------------------------------
// 5. Adding Elements
// ------------------------------
fruits.push("date"); // Add to end
fruits.unshift("avocado"); // Add to beginning
console.log("\n After adding elements:", fruits);

// ------------------------------
// 6. Removing Elements
// ------------------------------
let last = fruits.pop(); // Removes last
let first = fruits.shift(); // Removes first
console.log("\n After removing elements:", fruits);
console.log("Removed:", first, last);

// ------------------------------
// 7. Looping Through Arrays
// ------------------------------
console.log("\n Looping:");

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

fruits.forEach((fruit, index) => {
  console.log(`forEach ${index}: ${fruit}`);
});

for (const fruit of fruits) {
  console.log("for...of:", fruit);
}

// ------------------------------
// 8. Useful Array Methods
// ------------------------------
console.log("\n Useful Methods:");

let letters = ["c", "a", "b"];
console.log("Original letters:", letters);

// sort
letters.sort();
console.log("Sorted:", letters);

// reverse
letters.reverse();
console.log("Reversed:", letters);

// includes
console.log("Includes 'a'?", letters.includes("a")); // true

// indexOf
console.log("Index of 'b':", letters.indexOf("b")); // 0 or 2 depending on sorting

// join
console.log("Joined:", letters.join("-")); // b-a-c

// slice (non-destructive)
let sliced = letters.slice(0, 2);
console.log("Sliced (0–2):", sliced);
console.log("Original still:", letters);

// splice (destructive)
letters.splice(1, 1, "x");
console.log("Spliced:", letters); // replaces index 1 with "x"

// concat
let combined = letters.concat(["z", "y"]);
console.log("Concatenated:", combined);

// map
let upper = fruits.map((f) => f.toUpperCase());
console.log("Mapped to uppercase:", upper);

// filter
let longFruits = fruits.filter((f) => f.length > 5);
console.log("Filtered (>5 chars):", longFruits);

// reduce
let nums = [10, 20, 30];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log("Reduced sum:", sum); // 60

// ------------------------------
// 9. Nested Arrays
// ------------------------------
let matrix = [
  [1, 2],
  [3, 4],
];
console.log("\n Nested array (matrix):", matrix);
console.log("Element at [1][0]:", matrix[1][0]); // 3

// ------------------------------
// 10. typeof and Array.isArray()
// ------------------------------
console.log("\n typeof vs isArray:");
console.log("typeof fruits:", typeof fruits); // object
console.log("Array.isArray(fruits):", Array.isArray(fruits)); // true

// ------------------------------
// Summary of Key Methods:
// ------------------------------
/**
 * push()      → Add to end
 * pop()       → Remove from end
 * unshift()   → Add to beginning
 * shift()     → Remove from beginning
 * sort(), reverse()
 * slice(), splice()
 * map(), filter(), reduce(), forEach()
 * indexOf(), includes(), join()
 * concat()
 */
