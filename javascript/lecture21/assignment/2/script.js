let username = document.querySelector("input");
let heading = document.querySelector("h2");

username.addEventListener("input", function () {
  let string = username.value;
  console.log(string);

  let status = [...string].every((e) => {
    return (e >= "A" && e <= "Z") || (e >= "a" && e <= "z") || e == " ";
  });

  if (status) {
    console.log(string);
    heading.innerHTML = string;
  }
});
    


