// routes/educatorRoutes.js
const express = require("express");
const Educator = require("../models/Educator");
const router = express.Router();

// POST route for educator registration
router.post("/register", async (req, res) => {
  const educatorData = req.body;

  try {
    // const educator = new Educator(educatorData);
    // await educator.save();
    console.log(educatorData);
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error saving educator:", error);
    res.status(500).json({ error: "Failed to register" });
  }
});

router.post("/signup", async (req, res) => {
  const signupData = req.body;

  try {
    // const educator = new Educator(educatorData);
    // await educator.save();
    console.log(signupData);
    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error with signup:", error);
    res.status(500).json({ error: "Failed to sign" });
  }
});

router.post("/testimonials", async (req, res) => {
  const signupData = req.body;

  try {
    // const educator = new Educator(educatorData);
    // await educator.save();
    console.log(signupData);
    res.status(200).json({ message: "Form is submited successful" });
  } catch (error) {
    console.error("Error with FormFillUp:", error);
    res.status(500).json({ error: "Failed to Submit" });
  }
});

module.exports = router;
