What is a function?
‎A function is a reusable block of code that performs a task. It can accept inputs (parameters) and return a value.
‎
‎Function Declaration
‎
‎function greet(name) {
‎  return "Hello, " + name + "!";
‎}
‎console.log(greet("Daniel")); // "Hello, Daniel!"
‎
‎
‎Function Expression
‎
‎const add = function (a, b) {
‎  return a + b;
‎};
‎console.log(add(2, 3)); // 5
‎
‎
‎Arrow Function (shorter syntax)
‎
‎const multiply = (a, b) => a * b;
‎console.log(multiply(4, 5)); // 20
‎
‎
‎Default parameters
‎
‎function say(message = "I obey, Master") {
‎  return message;
‎}
‎console.log(say()); // default used
‎
‎
‎Rest parameters (collect extra args)
‎
‎function sumAll(...numbers) {
‎  return numbers.reduce((s, n) => s + n, 0);
‎}
‎console.log(sumAll(1,2,3,4)); // 10
‎
‎
‎Higher-order functions (accept or return functions)
‎
‎function operate(a, b, op) {
‎  return op(a, b);
‎}
‎console.log(operate(5, 2, (x,y) => x - y)); // 3
‎
‎
‎Closure (function remembers outer scope)
‎
‎function makeAdder(x) {
‎  return function(y) {
‎    return x + y;
‎  };
‎}
‎const add10 = makeAdder(10);
‎console.log(add10(5)); // 15
‎
‎
‎IIFE (Immediately Invoked Function Expression)
‎
‎(function() {
‎  console.log("This runs immediately");
‎})();
‎
‎
‎Async function (brief mention)
‎
‎async function fetchSomething() {
‎  // placeholder; real network calls not used here
‎  return "done";
‎}
‎fetchSomething().then(console.log);                              // Calculator functions

// Arithmetic Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
}

// Logical Operations
function andOp(a, b) {
    return a && b;
}
function orOp(a, b) {
    return a || b;
}
function notOp(a) {
    return !a;
}

// Comparison Operations
function isEqual(a, b) {
    return a == b;
}
function isStrictEqual(a, b) {
    return a === b;
}
function isGreater(a, b) {
    return a > b;
}
function isLess(a, b) {
    return a < b;
}

// Example usage
console.log("Arithmetic:");
console.log("5 + 3 =", add(5, 3));
console.log("5 - 3 =", subtract(5, 3));
console.log("5 * 3 =", multiply(5, 3));
console.log("5 / 3 =", divide(5, 3));

console.log("\nLogical:");
console.log("true && false =", andOp(true, false));
console.log("true || false =", orOp(true, false));
console.log("!true =", notOp(true));

console.log("\nComparison:");
console.log("5 == '5' ->", isEqual(5, "5"));
console.log("5 === '5' ->", isStrictEqual(5, "5"));
console.log("7 > 3 ->", isGreater(7, 3));
console.log("7 < 3 ->", isLess(7, 3));



3. // Function to print multiplication table
function multiplicationTable(groupNo) {
    console.log(`Multiplication Table for ${groupNo}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${groupNo} x ${i} = ${groupNo * i}`);
    }
}

// Example usage
let groupNumber = 7;  // change this number as needed
multiplicationTable(groupNumber);
