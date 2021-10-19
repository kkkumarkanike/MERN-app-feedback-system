const express = require("express");
const morgon = require("morgan")

const app = express()

// * Middlewares
app.use(morgon("tiny"))

app.use('/',(req,res) =>{
     res.json({message : "Hi there"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App is running on",PORT));