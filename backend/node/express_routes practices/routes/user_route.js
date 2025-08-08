import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello user");
});

router.get("/add", (req, res) => {
  res.send("user is adding");
});

router.get("/delete", (req, res) => {
  res.send("User is deleting ");
});

export default router;
