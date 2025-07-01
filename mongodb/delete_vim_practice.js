// Some random code for vim practice

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((n) => n * n);

console.log(greet("Vim User"));
console.log("Squared numbers:", squared);
// --- More random code below ---

for (let i = 0; i < 10; i++) {
  console.log(`Line ${i + 1}: This is a practice line.`);
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

Object.keys(obj).forEach((key) => {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
});

function randomSum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log("Sum:", randomSum([10, 20, 30, 40, 50]));

// Practice editing these functions
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

console.log(add(2, 3));
console.log(sub(5, 2));
console.log(mul(3, 4));
console.log(div(10, 2));

// Array practice
const arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(i * 2);
}
console.log(arr);

// String practice
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.split(" "));

// More lines for vim practice
for (let i = 0; i < 30; i++) {
  console.log(`Practice log line #${i + 1}`);
}

// End of random code
