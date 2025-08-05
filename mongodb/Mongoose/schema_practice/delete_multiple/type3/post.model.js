// import mongoose, { Schema } from "mongoose";
import mongoose, { Schema } from "mongoose";

async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ManytoOne");
  console.log("connection established");
}

connection();

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

const postSchema = mongoose.Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  const postOneUser = await User.create({ name: "Dushyant", age: 22 });
  const result = await Post.create({
    owner: postOneUser,
    content: "Dushyant Post",
  });
  console.log(result);
};

const addPost = async () => {
  const requiredUser = await User.findOne({ name: "Ghost" });
  console.log(requiredUser);

  const result = await Post.create({
    owner: requiredUser,
    content: "populate post",
  });

  console.log(result);
};
// addPost();
// addData();

async function findPost() {
  const owner = await User.findOne({ name: "Ghost" });

  const result = await Post.find({ owner: owner }).populate("owner");
  console.log(result);
}

findPost();
