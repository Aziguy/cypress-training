// ==============================
// JavaScript Operators
// ==============================

/**
 * Arithmetic Operators
 */
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition (a + b):", a + b); // 15
console.log("Subtraction (a - b):", a - b); // 5
console.log("Multiplication (a * b):", a * b); // 50
console.log("Division (a / b):", a / b); // 2
console.log("Modulus (a % b):", a % b); // 0
console.log("Exponentiation (a ** b):", a ** b); // 100000

/**
 * Assignment Operators
 */
let x = 10;

console.log("\nAssignment Operators:");
x += 5; // x = x + 5
console.log("x += 5:", x); // 15

x -= 3; // x = x - 3
console.log("x -= 3:", x); // 12

x *= 2; // x = x * 2
console.log("x *= 2:", x); // 24

x /= 4; // x = x / 4
console.log("x /= 4:", x); // 6

x %= 4; // x = x % 4
console.log("x %= 4:", x); // 2

x **= 3; // x = x ** 3
console.log("x **= 3:", x); // 8

let y = 1;
y <<= 2; // y = y << 2
console.log("y <<= 2:", y); // 4

y >>= 1; // y = y >> 1
console.log("y >>= 1:", y); // 2

y >>>= 1; // y = y >>> 1 (unsigned right shift)
console.log("y >>>= 1:", y); // 1

y &= 1; // y = y & 1
console.log("y &= 1:", y); // 1

y |= 2; // y = y | 2
console.log("y |= 2:", y); // 3

y ^= 1; // y = y ^ 1
console.log("y ^= 1:", y); // 2

/**
 * Comparison Operators
 */
let p = 5;
let q = "5";

console.log("\nComparison Operators:");
console.log("Equal (==):", p == q); // true (type coercion)
console.log("Strict Equal (===):", p === q); // false (no coercion)
console.log("Not Equal (!=):", p != q); // false
console.log("Strict Not Equal (!==):", p !== q); // true
console.log("Greater Than (>):", p > 3); // true
console.log("Less Than (<):", p < 10); // true
console.log("Greater Than or Equal (>=):", p >= 5); // true
console.log("Less Than or Equal (<=):", p <= 4); // false

/**
 * Logical Operators
 */
let isTrue = true;
let isFalse = false;

console.log("\nLogical Operators:");
console.log("AND (true && false):", isTrue && isFalse); // false
console.log("OR (true || false):", isTrue || isFalse); // true
console.log("NOT (!true):", !isTrue); // false

/**
 * Unary Operators
 */
let n = 5;

console.log("\nUnary Operators:");
console.log("Unary plus (+n):", +n); // 5
console.log("Unary minus (-n):", -n); // -5

let str = "123";
console.log("Unary plus with string:", +str); // 123 (converted to number)

let count = 1;
console.log("Post-increment (count++):", count++); // 1
console.log("After post-increment:", count); // 2

console.log("Pre-increment (++count):", ++count); // 3

console.log("typeof 123:", typeof 123); // number
console.log("typeof 'abc':", typeof "abc"); // string

let obj = { prop: 42 };
console.log("delete obj.prop:", delete obj.prop); // true (property removed)

console.log("void operator (void 0):", void 0); // undefined

/**
 * Ternary Operator
 */
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("\nTernary Operator:");
console.log("Can vote?", canVote); // Yes

/**
 * Bitwise Operators
 */
let m = 5; // binary: 0101
let n2 = 3; // binary: 0011

console.log("\nBitwise Operators:");
console.log("AND (m & n2):", m & n2); // 1 (0001)
console.log("OR (m | n2):", m | n2); // 7 (0111)
console.log("XOR (m ^ n2):", m ^ n2); // 6 (0110)
console.log("NOT (~m):", ~m); // -6 (bitwise NOT)
console.log("Left Shift (m << 1):", m << 1); // 10 (1010)
console.log("Right Shift (m >> 1):", m >> 1); // 2
console.log("Unsigned Right Shift (m >>> 1):", m >>> 1); // 2
