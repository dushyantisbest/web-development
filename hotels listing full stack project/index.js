import app from "./app.js";
import connectionInstance from "./db.js";
import Listing from "./models/listing.model.js";
import asyncWrapper from "./utils/asyncWraper.js";
import ErrorHandlingExpress from "./utils/ErrorHandling.js";
import listingValidation from "./schema.js";
// import InputData from "./init.js";
await connectionInstance();
//run to imput fake data
// InputData();

//routes

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
app.get(
  "/listing",
  asyncWrapper(async (req, res) => {
    const list = await Listing.find({});
    res.render("landing.ejs", { list });
  })
);

//create
app.get("/listing/add", (req, res) => {
  res.render("form.ejs");
});

app.post(
  "/listing/add",
  validateListing,
  asyncWrapper(async (req, res) => {
    // if (!req.body) {
    //   throw new ErrorHandlingExpress(400, "Enter valid data");
    // }
    await Listing.insertOne(req.body);
    res.redirect("/listing");
  })
);

// to display indivisul hotel data
app.get(
  "/listing/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const hotelData = await Listing.findById(id);
    res.render("indivisual_description.ejs", { hotelData });
  })
);

//edit
app.get(
  "/listing/edit/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    let hotelData = await Listing.findById(id);

    res.render("edit-form.ejs", { hotelData });
  })
);

//update
app.put(
  "/listing/edit/:id",
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
app.delete(
  "/listing/delete/:id",
  asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
  })
);

// if the above routes does not match
app.use((req, res, next) => {
  next(new ErrorHandlingExpress(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  res.render("error.ejs", { statusCode, message });
});

app.listen(8080, () => {
  console.log("server is working");
});

// just some random line might delete later
