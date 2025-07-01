const express = require("express");
const path = require("path");

const data = require("./data.json");
const app = express();

let port = 3000;
app.listen(port);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  if (data[username]) {
    res.render("instagram", { data: data[username] });
  } else {
    res.render("error.ejs");
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});
