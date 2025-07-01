import mongoose from "mongoose";
// import { User, Chat } from "./models/models.js";
import User from "./models/user.model.js";
import Chat from "./models/chat.model.js";
import app from "./app.js";
import connectionInstance from "./db/index.js";

// import mongoose from "mongoose";

try {
  await connectionInstance;
} catch (error) {
  console.log("error occured");
}

async function addData() {
  const users = await User.insertMany([
    { username: "dushyant123", password: "lol" },
    { username: "ghost", password: "ghost123" },
  ]);

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

await addData();

app.listen(8080, () => console.log("server working"));
