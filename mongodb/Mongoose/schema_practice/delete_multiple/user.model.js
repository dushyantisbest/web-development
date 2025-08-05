import mongoose from "mongoose";

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
    city: "Dehradun  ",
    location: "Moti Vihar",
  },
];

const userOne = new User({ name: "Dushyant Kumar", address: locations });
await userOne.save();
