const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    // res.redirect("/surveys");
    res.redirect("/");
  }
);
router.get("/auth/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
router.get("/auth/user", (req, res) => {
  res.json(req.user);
});

module.exports = router;
