const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(cookieParser());

app.use("/api", require("./Routes/contentUploadRoute"));
dotenv.config();

const authRoutes = require("./Routes/authRoutes.js");
const userPreferenceRoutes = require("./Routes/userPreferenceRoutes.js");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/userPreference", userPreferenceRoutes);

app.listen(process.env.PORT || 4000, async () => {
  console.log("connected to port" + PORT);
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
