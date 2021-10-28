const express = require("express");
const morgon = require("morgan");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
const requireLogin = require("./middlewares/requireLogin");
const keys = require("./config/keys");
require("./services/passport");

mongoose
  .connect(keys.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(morgon("tiny"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000" || "http://127.0.0.1:3000",
  })
);

app.use(
  cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use("/api", requireLogin, billingRoutes);
app.use("/api", requireLogin, surveyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App is running on", PORT)); 
