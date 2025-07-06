import mongoose from "mongoose";

const Url = "mongodb://127.0.0.1:27017/myapp";
let connectionInstance;
try {
  connectionInstance = async () => {
    await mongoose.connect(Url);
    console.log("database connected");
  };
} catch (error) {
  console.log("connection failed");
}

export default connectionInstance;
