let heading = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      heading.style.color = color;
      resolve("Color changed");
    }, delay);
  });
}

changeColor("blue", 1000)
  .then(() => {
    console.log("color changes to blue");
    return changeColor("red", 1000);
  })
  .then(() => {
    console.log("color changed to red");
    return changeColor("pink", 1000);
  })
  .then(() => {
    console.log("color changed to pink");
  })
  .catch(() => {
    console.log("unable to change color");
  });
