const express = require("express");
const router = express.Router();
const requireCredits = require("../middlewares/requireCredits");
const Survey = require("../models/surveySchema");
const Mailer = require("../services/Mailer");
const emailTemplate = require("../services/emailTemplate/emailTemplate");

router.get("/surveys", (req, res) => {});

router.post("/surveys", requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;
  console.log(recipients.split(","));
  try {
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({ email: email })),
      _user: req.user.id,
    });
    console.log(survey);
    // const mailer = new Mailer(survey, emailTemplate(survey));
    // mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
