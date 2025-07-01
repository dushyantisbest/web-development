import app from "./app.js";
import connectionInstance from "./db/index.js";
import mongoose from "mongoose";

await connectionInstance()




app.listen(8080, () => console.log("working"));
