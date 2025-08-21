import express from "express";
// import User from "../models/user.model.js";
import asyncWrapper from "../utils/asyncWraper.js";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("user/signup-form.ejs");
});

router.post(
  "/signup",
  asyncWrapper(async (req, res) => {
    try {
      const { username, email, password } = req.body;
      await User.register(new User({ username, email }), password);
      // show a flash message
      req.flash("success", "Welcome to flatMate");
      res.redirect("/listing");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/user/signup");
    }
  })
);

export default router;
