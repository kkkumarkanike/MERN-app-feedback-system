const express = require("express");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecreteKey);
const router = express.Router();

router.post("/stripe", async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 5000,
    currency: "inr",
    source: req.body.id,
    description: " for 5 email credits",
  });
  if (req.user.credits) {
    req.user.credits += 5;
  } else {
    req.user.credits = 5;
  }
  const user = await req.user.save();
  res.send(user);
});

module.exports = router;
