import express from "express";
import user_route from "./routes/user_route.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use("/user", user_route);

app.get("/cookie/add", (req, res) => {
  res.cookie("colour", "red");
  res.send("cookie added");
});

app.get("/cookie/read", (req, res) => {
  res.send(res.cookie);
  console.log(res.cookie);
});

app.listen(port, () => {
  console.log("server is listning on port ", port);
});
