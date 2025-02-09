let arr = [4, 14, 67, 8, 5, 3, 5, 6, 323, 5];

let largest = arr[0];

for (let index = 0; index < arr.length; index++) {
  if (largest < arr[index]) {
    largest = arr[index];
  }
}

console.log(largest);
