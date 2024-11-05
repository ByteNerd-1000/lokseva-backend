const mongoose = require("mongoose");

const educatorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  qualification: String,
  subjectExpertise: String,
  experience: String,
  availability: String,
  bio: String,
  agreeToTerms: Boolean,
});

module.exports = mongoose.model("Educator", educatorSchema);
