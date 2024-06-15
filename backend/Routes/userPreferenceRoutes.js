const express = require("express");
const sendData = require("../Controllers/userPreferenceController.js");

const router = express.Router();

router.post("/sendData", sendData);
// router.get("/getData", getData);

module.exports = router;
