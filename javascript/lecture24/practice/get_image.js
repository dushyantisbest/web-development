let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

async function getImageLink() {
  try {
    let response = await axios.get(url);
    let link = response.data.message;
    console.log(link);
    let image = document.querySelector("#image");
    image.setAttribute("src", link);
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  getImageLink();
});
