const express = require("express");
const {
  login,
  signUp,
  logout,
  signUpMentor,
  getUnauthMentors,
  setAuth,
  deleteMentor,
} = require("../Controllers/authControllers.js");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.post("/mentor/signup", signUpMentor);
router.get("/mentor/unauth", getUnauthMentors);
router.post("/mentor/accept/:id", setAuth);
router.delete("/mentor/decline/:id", deleteMentor);

module.exports = router;
