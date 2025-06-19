let heading = document.querySelector("h1");

function changeColor(color, delay, newColor) {
  setTimeout(() => {
    heading.style.color = color;
    if (newColor) {
      newColor();
    }
  }, delay);
}

changeColor("green", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("red", 1000);
  });
});
