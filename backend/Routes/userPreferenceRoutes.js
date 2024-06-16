const express = require("express");
const {
  sendData,
  getData,
} = require("../Controllers/userPreferenceController.js");

const router = express.Router();

router.post("/sendData", sendData);
router.get("/getData", getData);

module.exports = router;
