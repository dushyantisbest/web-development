import mongoose from "mongoose";

try {
  const connectionInstance = await mongoose.connection(URI);
  console.log("Database connection succesful");
} catch (error) {
  console.log(error);
}

export default connectionInstance;
