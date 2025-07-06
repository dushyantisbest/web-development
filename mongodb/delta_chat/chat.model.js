import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    to: { type: String, require: true },
    from: { type: String, require: true },
    content: { type: String, require: true },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", userSchema);
export default Chat;
