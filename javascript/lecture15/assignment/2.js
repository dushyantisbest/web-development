let count = 0;
let number = 287152;

while (Math.floor((number % 10)) != 0) {
  count++;
  number = number / 10;
}

console.log(count);
