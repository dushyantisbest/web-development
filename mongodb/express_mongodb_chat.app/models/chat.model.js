import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    receivedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
