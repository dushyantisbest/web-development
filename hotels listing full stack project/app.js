import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

//get the dirname variable
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
//code for setting path

// all the middle wares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
export default app;
