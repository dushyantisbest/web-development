import app from "./app.js";
import connectionInstance from "./db.js";
import Listing from "./models/listing.model.js";
// import InputData from "./init.js";
await connectionInstance();
//run to imput fake data
// InputData();

//routes

//read
app.get("/listing", async (req, res) => {
  const list = await Listing.find({});
  res.render("landing.ejs", { list });
});

//create
app.get("/listing/add", (req, res) => {
  res.render("form.ejs");
});

app.post("/listing/add", async (req, res) => {
  await Listing.insertOne(req.body);
  res.redirect("/listing");
});

// to display indivisul hotel data
app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const hotelData = await Listing.findById(id);
  res.render("indivisual_description.ejs", { hotelData });
});

//edit
app.get("/listing/edit/:id", async (req, res) => {
  const { id } = req.params;
  let hotelData = await Listing.findById(id);

  res.render("edit-form.ejs", { hotelData });
});

//update
app.put("/listing/edit/:id", async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndUpdate(id, req.body);
  res.redirect(`/listing/${id}`);
});

//delete
app.delete("/listing/delete/:id", async (req, res) => {
  let id = req.params.id;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});

app.listen(8080, () => {
  console.log("server is working");
});
