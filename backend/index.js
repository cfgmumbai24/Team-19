const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes.js");
const app = express();
// dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(4000, async () => {
  console.log("connected to port" + 4000);
  try {
    await mongoose.connect(
      "mongodb+srv://sverma4be21:iSQdDYM1OUiUYHBj@cluster0.3nziygg.mongodb.net/cfgDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
