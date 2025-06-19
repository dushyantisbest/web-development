let heading = document.querySelector("h1");
heading.style.color = "red";

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      heading.style.color = color;
      resolve("color changed");
    }, delay);

    if (!heading) {
      reject("can't change");
    }
  });
}

async function demo() {
  await colorChange("blue", 1000);
  await colorChange("green", 1000);
  await colorChange("orange", 1000);
  await colorChange("pink", 1000);
}

demo();
