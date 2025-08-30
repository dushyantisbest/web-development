import express from "express";
// import User from "../models/user.model.js";
import asyncWrapper from "../utils/asyncWraper.js";
import User from "../models/user.model.js";
import passport from "passport";
import { saveRedirectUrlLocal } from "../middleware.js";
import * as userController from "../controller/user.controller.js";

const router = express.Router();

router.get("/signup", userController.renderSignupForm);

router.post("/signup", asyncWrapper(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrlLocal,
  passport.authenticate("local", {
    failureRedirect: "/user/login",
    failureFlash: true,
  }),
  asyncWrapper(userController.login)
);

router.post("/logout", asyncWrapper(userController.logout));

export default router;
