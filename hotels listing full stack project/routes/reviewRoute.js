import express from "express";
import Review from "../models/review.model.js";
import Listing from "../models/listing.model.js";
import asyncWrapper from "../utils/asyncWraper.js";
import { reviewValidation } from "../schemaValidation.js";

const router = express.Router({ mergeParams: true });

const validateReview = (req, res, next) => {
  if (reviewValidation.validate(req.body).error) {
    throw new ErrorHandlingExpress(
      400,
      reviewValidation.validate(req.body).error
    );
  } else {
    next();
  }
};

// Review post route
router.post(
  "/",
  validateReview,
  asyncWrapper(async (req, res) => {
    const listing = await Listing.findOne({ _id: req.params.id });

    const myReview = await Review.create(req.body);
    listing.reviews.push(myReview);
    await listing.save();
    res.redirect(`/listing/${listing.id}`);
  })
);

// review delete route
router.delete(
  "/:reviewId",
  asyncWrapper(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, {
      $pull: { reviews: req.params.reviewId },
    });
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/listing/${req.params.id}`);
  })
);

export default router;
