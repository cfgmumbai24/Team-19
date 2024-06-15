const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config()
const app = express();

app.use(fileUpload({
    useTempFiles:true
}))
app.use(express.json());

app.use('/api',require('./Routes/contentUploadRoute'))

const authRoutes = require("./Routes/authRoutes.js");




app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 4000, async () => {
  console.log("connected to port" + process.env.PORT);
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
