import mongoose from "mongoose";
async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("connection established");
}

connection();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: [{ city: { type: String }, location: { type: String } }],
});

const User = mongoose.model("User", userSchema);
const locations = [
  {
    city: "Delhi",
    location: "Rohini",
  },
  {
    city: "Jaipur",
    location: "Moti Vihar",
  },
];

const userOne = new User({ name: "Dushyant Kumar", address: locations });
await userOne.save();
