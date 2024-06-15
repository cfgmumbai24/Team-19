const express = require("express");
const { login, signUp, logout } = require("../Controllers/authControllers.js");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
