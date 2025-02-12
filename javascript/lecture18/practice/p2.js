let id = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 10000);
