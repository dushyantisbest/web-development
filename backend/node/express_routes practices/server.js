import express from "express";
import user_route from "./routes/user_route.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const sessionOptions = {
  secret: "myverysecretKey",
  resave: false,
  saveUninitialized: true,
  cookie: { secret: true },
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(session(sessionOptions));
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/user", user_route);

app.get("/cookie/add", (req, res) => {
  req.flash("success", "User registered sucessfully");
  res.cookie("colour", "red");
  console.log(res.locals.success);

  res.render("basic.ejs");
});

app.get("/cookie/read", (req, res) => {
  console.log(req.session.lol);
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log("server is listning on port ", port);
});
