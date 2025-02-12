let vowels = ["a", "e", "i", "o", "u"];

let str = "jfklajdfkljaklfjaeiou";

function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowelCount(str));
