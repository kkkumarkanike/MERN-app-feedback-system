const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipientSchema = require("./recipientSchema");

const surveySchema = new Schema(
  {
    title: {
      type: String,
    },
    subject: {
      type: String,
    },
    body: {
      type: String,
    },
    recipients: [recipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
