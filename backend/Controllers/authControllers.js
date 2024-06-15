const User = require("../Models/userModel.js");
const bcrypt = require("bcryptjs");
const generateToken = require("../Utils/generateToken.js");

const signUp = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      email,
      phoneNumber,
    } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "passwords do not match" });
    const userU = await User.findOne({ username });
    const userE = await User.findOne({ email });
    const userP = await User.findOne({ phoneNumber });

    if (userU) return res.status(400).json({ error: "username exists" });
    if (userE) return res.status(400).json({ error: "email exists" });
    if (userP) return res.status(400).json({ error: "phone number exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      email,
      phoneNumber,
    });
    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);
      return res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "incorrect password or username" });

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      gender: user.gender,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

const logout = (req, res) => {
  console.log(req.cookies.jwt);
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signUp, login, logout };
