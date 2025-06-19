let url = "https://catfact.ninja/fact";
let para = document.querySelector("#fact");
let btn = document.querySelector("button");
async function getApi() {
  try {
    btn.disabled = true;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    para.innerHTML = data.fact;
  } catch (error) {
    console.log(error);
  } finally {
    btn.disabled = false;
  }
}

btn.onclick = () => {
  getApi();
};
