const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const UserRoutes = require("./routes/UserRoutes");

app.use(UserRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
 