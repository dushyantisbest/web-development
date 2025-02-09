let sum = 0;
let number = 287152;

while (Math.floor(number % 10) != 0) {
  sum += Math.floor(number % 10);
  number = number / 10;
}

console.log(sum);

