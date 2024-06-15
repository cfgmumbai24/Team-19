const mongoose = require("mongoose");

const userPreferenceSchema = new mongoose.Schema({
  jobDescription: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const UserPreference = mongoose.model("UserPreference", userPreferenceSchema);

module.exports = UserPreference;
