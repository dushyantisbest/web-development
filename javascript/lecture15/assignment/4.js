let n = 5;
let fact = 1;
if (n === 0) {
} else {
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
}

console.log(fact);
