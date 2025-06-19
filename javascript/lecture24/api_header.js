let url = "https://icanhazdadjoke.com/";

btn = document.querySelector("button");
para = document.querySelector("p");

btn.addEventListener("click", async () => {
  try {
    const header = { headers: { Accept: "application/json" } };
    let response = await axios.get(url, header);
    let joke = response.data.joke;
    para.innerHTML = joke;
  } catch (error) {
    console.log(error);
  }
});
