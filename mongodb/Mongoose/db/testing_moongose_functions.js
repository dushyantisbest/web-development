import connectionMongo from "./index.js";
import User from "./models/user.model.js";
import mongoose from "mongoose";
// import mongoose from "mongoose";

const run = async () => {
  await connectionMongo();
  const userData = await User.findOneAndUpdate(
    { name: "Larry69" },
    { name: "ghost" }
  );
  console.log(userData);
  mongoose.disconnect();
};

run();
// mongoose.disconnect();
