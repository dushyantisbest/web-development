import express from "express";
import user_route from "./routes/user_route.js";

const app = express();
const port = 3000;

app.use("/user", user_route);

app.listen(port, () => {
  console.log("server is listning on port ", port);
});
