import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(app);

let port = 5500;

app.listen(port);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dk", (req, res) => {
  res.send("dk boss");
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  // console.log(q);
  res.send("query is : " + q);
});

// app.get("/:username", (req, res) => {
//   let { username } = req.params;
//   // console.log(username);
//   res.send("hello world my name is dushyant");
// });
