import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", UserSchema);

// export default user;
export default user;

//problems
// Schema
// model declaration
// user.find() async operation
// file import testing
