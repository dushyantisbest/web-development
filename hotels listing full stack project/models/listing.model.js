import mongoose, { Schema } from "mongoose";
import Review from "./review.model.js";
import cloudinary from "cloudinary";

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: {
      url: {
        type: String,
        required: true,
        default:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (value) =>
          value === ""
            ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : value,
      },
      filename: { type: String, required: true },
    },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

// mongoose middleware to remove all the reviews when the listing is deleted

listingSchema.post("findOneAndDelete", async function (myListing) {
  // to delete the image from cloudnary
  const publicId = myListing.image.filename;
  cloudinary.uploader
    .destroy(publicId, { invalidate: true })
    .then((result) => {
      console.log("Deletion successful:", result);
    })
    .catch((error) => {
      console.error("Deletion failed:", error);
    });

  // to delete all the review connected the listing
  if (myListing.reviews) {
    await Review.deleteMany({
      _id: { $in: myListing.reviews },
    });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
