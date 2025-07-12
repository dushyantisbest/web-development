import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import importFakeChats from "./init.js";
import connectionInstance from "./database.js";
import Chat from "./chat.model.js";
import methodOverride from "method-override";

//configuring file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

//middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
//conneting with database
await connectionInstance();

app.get("/add-user", (res, req) => {
  importFakeChats();
  console.log("fake user added");
});

app.get("/chats", async (req, res) => {
  const chats = await Chat.find({});
  res.render("AllChats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.sendFile(path.join(__dirname, "public/new-chat.html"));
});

app.post("/chats/new", (req, res) => {
  const { sender, content, receiver } = req.body;
  Chat.insertOne({ to: sender, from: receiver, content: content });
  res.redirect("/chats");
});

//update
app.get("/chats/edit/:id", async (req, res) => {
  const chatId = req.params.id;
  const chat = await Chat.findById(chatId);
  res.render("edit.ejs", { chat });
});

app.put("/chats/edit/:id", async (req, res) => {
  const newChat = {
    to: req.body.sender,
    from: req.body.receiver,
    content: req.body.content,
  };
  await Chat.findByIdAndUpdate(req.params.id, newChat);
  res.redirect("/chats");
});
//delete
app.delete("/chats/delete/:id", async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.redirect("/chats");
});

const PORT = 8080;

app.listen(PORT, () => console.log("server is working on ", PORT));
