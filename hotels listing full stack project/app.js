import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import methodOverride from "method-override";
import engine from "ejs-mate";

//get the dirname variable
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
//code for setting path

// all the middle wares
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
export default app;
