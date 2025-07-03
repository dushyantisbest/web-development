import mongoose from "mongoose";
import User from "./models/user.model.js";
import Chat from "./models/chat.model.js";
import app from "./app.js";
import connectionInstance from "./db/index.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// import mongoose from "mongoose";

try {
  await connectionInstance;
} catch (error) {
  console.log("error occured");
}

async function addChat() {
  const dushyant = users.find((u) => u.username === "dushyant123");
  const ghost = users.find((u) => u.username === "ghost");
  await Chat.insertMany([
    {
      content: "hello this is first chat",
      receivedBy: dushyant._id,
      sentBy: ghost._id,
    },
    {
      content: "hello this is second chat",
      receivedBy: ghost._id,
      sentBy: dushyant._id,
    },
  ]);
}

// / route for login user

app.get("/", (req, res) => {
  const error = req.query.error;

  res.render("login.ejs", { error });
});

app.post("/user", async (req, res) => {
  // match the data with database
  // if error tell wrong password or username
  // if don't found in database then signup 

  try {
    await User.insertOne(req.body);
  } catch (error) {
    console.log("Error occured check password or signup");
    if (error.errorResponse.code == 11000) {
      res.redirect("/?error=username_exists");
      console.log("make changes in login webpage");
    }
  }
});
// make / which will show all the chats of specific user// also make a filter which will show recived as sent chats seperate
// make / which can update your sent chats / like a edit btn in whatsapp
// make / which will add user to the database / kind of login
// make / which will send a chat to a specific user
// make / which will delete a specific chat

app.listen(process.env.PORT, () =>
  console.log("server working", process.env.PORT)
);
