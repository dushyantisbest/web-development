import { name } from "ejs";
import mongoose, { set } from "mongoose";

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: {
    type: String,
    required: true,
    default:
      "https://www.google.com/imgres?q=random%20aesthetic%20pictures&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F80%2F39%2F01%2F803901270a642646222fa6a6a1737ac8.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Frandom-aesthetic--581597739391014360%2F&docid=1X4g8okeH29i_M&tbnid=-02o_Yhg-0MhkM&w=675&h=1200&hcb=2",
    set: (value) =>
      value === ""
        ? "https://www.google.com/imgres?q=random%20aesthetic%20pictures&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F80%2F39%2F01%2F803901270a642646222fa6a6a1737ac8.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Frandom-aesthetic--581597739391014360%2F&docid=1X4g8okeH29i_M&tbnid=-02o_Yhg-0MhkM&w=675&h=1200&hcb=2"
        : value,
  },
  price: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
