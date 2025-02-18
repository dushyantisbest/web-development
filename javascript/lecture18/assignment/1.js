const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

let oye = [2, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3];
console.log(arrayAverage(oye));
