function doubleAndReturnArgs(array, ...others) {
  array.push(...others.map((n) => n * 2));
  return array;
}

let check = [1, 3, 4, 5, 6];
let another = [1, 1, 1, 1, 1, 1, 1];
// console.log(doubleAndReturnArgs(check, ...another));
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
