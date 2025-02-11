function randomNumber(start, end) {
  diff = end - start;
  random = Math.floor(Math.random() * (diff + 1)) + start;
  return random;
}

console.log(randomNumber(15, 20));
