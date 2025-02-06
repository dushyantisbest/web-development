let num1 = 50;
let num2 = 30;
let num3 = 50;

if (num1 < num2 && num2 > num3) {
  console.log(`${num2} is the greatest number`);
} else if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the greatest number`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is the greatest number`);
} else {
  console.log("The are 2 or more than 2 equal numbers");
}
