import express from "express";
import asyncWrapper from "../utils/asyncWraper.js";
import Listing from "../models/listing.model.js";
import { listingValidation } from "../schemaValidation.js";

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
  asyncWrapper(async (req, res) => {
    const list = await Listing.find({});
    res.render("landing.ejs", { list });
  })
);

//create
router.get("/add", (req, res) => {
  res.render("add_listing_form.ejs");
});

router.post(
  "/add",
  validateListing,
  asyncWrapper(async (req, res) => {
    await Listing.insertOne(req.body);
    req.flash("success", "user registerd succesfully");
    // console.log(req.flash("success"));
    res.redirect("/listing");
  })
);

// to display indivisul hotel data
router.get(
  "/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const hotelData = await Listing.findById(id).populate("reviews");
    res.render("indivisual_description.ejs", { hotelData });
  })
);

//edit
router.get(
  "/edit/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    let hotelData = await Listing.findById(id);

    res.render("edit_listing_form.ejs", { hotelData });
  })
);

//update
router.put(
  "/edit/:id",
  validateListing,
  asyncWrapper(async (req, res) => {
    if (!req.body) {
      throw new ErrorHandlingExpress(400, "Enter valid data");
    }
    const { id } = req.params;

    await Listing.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/listing/${id}`);
  })
);

//delete
router.delete(
  "/delete/:id",
  asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
  })
);

export default router;
