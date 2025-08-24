import express from "express";
import asyncWrapper from "../utils/asyncWraper.js";
import Listing from "../models/listing.model.js";
import { listingValidation } from "../schemaValidation.js";
import {
  isLoggedIn,
  saveRedirectUrlLocal,
  saveRedirectUrlSession,
} from "../middleware.js";

const router = express.Router({ mergeParams: true });

const validateListing = (req, res, next) => {
  if (listingValidation.validate(req.body).error) {
    throw new ErrorHandlingExpress(
      400,
      listingValidation.validate(req.body).error
    );
  } else {
    next();
  }
};

//read
router.get(
  "/",
  saveRedirectUrlSession,
  asyncWrapper(async (req, res) => {
    const list = await Listing.find({});
    res.render("landing.ejs", { list });
  })
);

//create
router.get("/add", saveRedirectUrlSession, isLoggedIn, (req, res) => {
  res.render("add_listing_form.ejs");
});

router.post(
  "/add",
  isLoggedIn,
  validateListing,
  asyncWrapper(async (req, res) => {
    await Listing.insertOne(req.body);
    req.flash("success", "New Listing added ");
    res.redirect("/listing");
  })
);

// to display indivisul hotel data
router.get(
  "/:id",
  saveRedirectUrlSession,
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const hotelData = await Listing.findById(id).populate("reviews");
    if (!hotelData) {
      req.flash("error", "Listing not found");
      res.redirect("/listing");
    } else {
      res.render("indivisual_description.ejs", { hotelData });
    }
  })
);

//edit
router.get(
  "/edit/:id",
  saveRedirectUrlSession,
  isLoggedIn,
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    let hotelData = await Listing.findById(id);

    res.render("edit_listing_form.ejs", { hotelData });
  })
);

//update
router.put(
  "/edit/:id",
  isLoggedIn,
  validateListing,
  asyncWrapper(async (req, res) => {
    if (!req.body) {
      throw new ErrorHandlingExpress(400, "Enter valid data");
    }
    const { id } = req.params;

    await Listing.findByIdAndUpdate(id, req.body, { runValidators: true });
    req.flash("success", "Listing updated ");
    res.redirect(`/listing/${id}`);
  })
);

//delete
router.delete(
  "/delete/:id",
  isLoggedIn,
  asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listing");
  })
);

export default router;
