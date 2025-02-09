let arr = [1, 2, 3, 5, 6, 7, 2, 3, 2, 2, 2, 2, 15];

while (arr.indexOf(2) != -1) {
  arr.splice(arr.indexOf(2), 1);
}

console.log(arr);
