let heading = document.querySelector("h1");
let button = document.querySelector("button");
let div = document.querySelector("div");

button.addEventListener("click", function () {
  //getting random values for color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  //assigning that value to heading
  let color = `rgb(${r},${g},${b})`;
  heading.textContent = color;
  heading.style.color = color;

  //assigning that value to div

  div.style.backgroundColor = color;
});
