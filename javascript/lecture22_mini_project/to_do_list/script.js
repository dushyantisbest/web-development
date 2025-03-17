let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");
let deleteButton = document.querySelectorAll(".delete");

button.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.textContent = input.value;
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.classList.add("delete");
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
});

// this doesn't work as the new dynamic elements will not be added to the deleteButton list because the js will run at the loading of the webpage and create the list of button which have delete class
// for (btn of deleteButton) {
//   btn.addEventListener("click", function () {
//     this.parentElement.remove();
//     console.log(this);
//     console.log("delete it");
//   });
// }

// solution Event Delagation

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
