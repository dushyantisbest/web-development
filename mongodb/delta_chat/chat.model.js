import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    from: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
