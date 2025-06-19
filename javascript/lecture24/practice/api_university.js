let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");

btn.addEventListener("click", async () => {
  try {
    let country = input.value;
    console.log(country);
    let response = await axios.get(url + country);
    let colleges = response.data;
    //   console.log(colleges);

    list.innerHTML = "";

    for (col of colleges) {
      console.log(col.name);
      let item = document.createElement("li");
      item.innerHTML = col.name;
      list.appendChild(item);
    }
  } catch (error) {
    console.log("couldn't get info");
  }
});
