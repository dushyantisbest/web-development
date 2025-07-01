import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connectionInstance;

try {
  const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  });
  console.log("Database connection succesful");
} catch (error) {
  console.log(error);
}
export default connectionInstance;
