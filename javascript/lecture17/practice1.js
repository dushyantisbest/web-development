function largeThanN(arr, n) {
  let large = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      large.push(arr[i]);
    }
  }
  return large;
}

let damm = [
  1, 3, 4, 5, 6, 67, 5, 43, 3, 4, 6, 6, 34, 3, 6, 6, 4, 3, 3, 56, 667, 5, 4, 3,
  3, 5, 6, 7, 78, 3,
];

console.log(largeThanN(damm, 15));




