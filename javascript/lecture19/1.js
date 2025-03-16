let squareSum = (array) => {
  let squared = array.map((n) => n * n);
  let sum = squared.reduce((n1, n2) => n1 + n2, 0);
  return sum / array.length;
};

let test = [1, 2, 3, 4, 5];

console.log(squareSum(test));
e