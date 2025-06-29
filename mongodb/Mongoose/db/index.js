process.env.DOTENV_DISABLE_LOGS = "true";

// connection mongodb and exporting it
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionMongo = async () => {
  return await mongoose.connect(process.env.URI);
};

export default connectionMongo;
