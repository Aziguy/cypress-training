// ==============================
// JavaScript Objects
// ==============================

/**
 * An object is a collection of key-value pairs (properties and methods).
 * - Keys are strings (or Symbols)
 * - Values can be any data type (including functions)
 */

console.log(" Object Basics");

// ------------------------------
// 1. Creating an object
// ------------------------------
const person = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

console.log("Person object:", person);

// ------------------------------
// 2. Accessing properties
// ------------------------------
console.log("\n Accessing properties:");

console.log("Name (dot):", person.name); // Alice
console.log("Age (bracket):", person["age"]); // 30

// Bracket notation allows dynamic property names:
let key = "isAdmin";
console.log("Dynamic access:", person[key]); // false

// ------------------------------
// 3. Modifying and adding properties
// ------------------------------
console.log("\n Modifying & adding:");

person.age = 31; // modify
person.country = "France"; // add new
console.log("Updated person:", person);

// ------------------------------
// 4. Deleting properties
// ------------------------------
delete person.isAdmin;
console.log("\n After deletion:", person);

// ------------------------------
// 5. Object with methods (functions)
// ------------------------------
const user = {
  username: "john_doe",
  greet: function () {
    console.log(`Hello, I'm ${this.username}`);
  },
  shout() {
    console.log(`${this.username.toUpperCase()}!!!`);
  },
};

console.log("\n Object with methods:");
user.greet(); // Hello, I'm john_doe
user.shout(); // JOHN_DOE!!!

// ------------------------------
// 6. Nested Objects
// ------------------------------
const employee = {
  name: "Sara",
  position: "Engineer",
  contact: {
    email: "sara@example.com",
    phone: "123-456-7890",
  },
};

console.log("\n Nested object:");
console.log("Email:", employee.contact.email);

// ------------------------------
// 7. Looping through object properties
// ------------------------------
console.log("\n Looping through properties:");

for (let key in employee) {
  console.log(`${key}: ${employee[key]}`);
}

// Looping nested object
console.log("\n Contact Info:");
for (let key in employee.contact) {
  console.log(`${key}: ${employee.contact[key]}`);
}

// ------------------------------
// 8. Object.keys(), Object.values(), Object.entries()
// ------------------------------
console.log("\n Built-in object methods:");

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log("Keys:", keys); // ['name', 'age', 'country']
console.log("Values:", values); // ['Alice', 31, 'France']
console.log("Entries:", entries); // [['name', 'Alice'], ['age', 31], ['country', 'France']]

entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ------------------------------
// 9. Object Destructuring
// ------------------------------
console.log("\n Destructuring:");

const { name, age } = person;
console.log("Name:", name); // Alice
console.log("Age:", age); // 31

// Nested destructuring
const {
  contact: { email, phone },
} = employee;
console.log("Email:", email);
console.log("Phone:", phone);

// ------------------------------
// 10. Object Copying & Spread
// ------------------------------
console.log("\n Copying objects:");

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };

console.log("Original:", original);
console.log("Copy:", copy);

// Object.assign
const clone = Object.assign({}, person, { age: 40 });
console.log("Cloned & modified:", clone);

// ------------------------------
// 11. Comparing Objects
// ------------------------------
console.log("\n Object Comparison:");

const obj1 = { x: 1 };
const obj2 = { x: 1 };

console.log("obj1 === obj2:", obj1 === obj2); // false (different references)

const obj3 = obj1;
console.log("obj1 === obj3:", obj1 === obj3); // true

// ------------------------------
// Summary
// ------------------------------
/**
 * Objects hold key-value pairs
 * Use dot or bracket notation to access
 * Add, modify, or delete properties
 * Can include nested objects & methods
 * Use Object.keys(), values(), entries()
 * Use spread (...) or Object.assign() to copy
 * Object comparison is by reference
 */
