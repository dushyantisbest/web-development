let heading = document.createElement("h1");
heading.textContent = "hello mic testing";
document.querySelector("body").append(heading);

let smallHeading = document.createElement("h3");
smallHeading.textContent = "I'm blue H3";
smallHeading.classList.add("blue");
document.querySelector("h1").append(smallHeading);

let container = document.createElement("div");
let containerHeading = document.createElement("h1");
let conntainerPara = document.createElement("p");

containerHeading.textContent = "I'm heading";
conntainerPara.textContent = "I'm a para";

container.append(containerHeading);
container.append(conntainerPara);
container.classList.add("container");

document.querySelector("body").append(container);
