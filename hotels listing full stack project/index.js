import app from "./app.js";
import connectionInstance from "./db.js";
import InputData from "./init.js";
await connectionInstance();


//run to imput fake data
// InputData();



app.listen(8080, () => {
  console.log("server is working");
});
