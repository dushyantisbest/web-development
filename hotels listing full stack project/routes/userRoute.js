import express from "express";
// import User from "../models/user.model.js";
import asyncWrapper from "../utils/asyncWraper.js";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("user/signup-form.ejs");
});

export default router;
