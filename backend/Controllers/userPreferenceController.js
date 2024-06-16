// const UserP = require("../Models/userModel.js");
const UserPreference = require("../Models/userPreferenceModel.js");

const sendData = async (req, res) => {
  try {
    const {
      jobDescription,
      state,
      industry,
      gender,
      requirements,
      age,
      userId,
    } = req.body;

    const newUserPreference = new UserPreference({
      jobDescription,
      state,
      industry,
      gender,
      requirements,
      age,
      userId,
    });
    await newUserPreference.save();
    return res.status(200).json({
      _id: newUserPreference._id,
      jobDescription: newUserPreference.jobDescription,
      state: newUserPreference.state,
      industry: newUserPreference.industry,
      gender: newUserPreference.gender,
      requirements: newUserPreference.requirements,
      age: newUserPreference.age,
      userId: newUserPreference.userId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const getData = async (req, res) => {
  try {
    const newUserPreference = await UserPreference.find();

    res.status(200).json(newUserPreference);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = { sendData, getData };
