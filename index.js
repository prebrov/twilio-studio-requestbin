let createError = require("http-errors");
let express = require("express");
let path = require("path");
let fs = require("fs");
let logger = require("morgan");
let cors = require("cors");
let helmet = require("helmet");
// let mongoose = require("mongoose");
let dotenv = require("dotenv");
// let { jwtHelper } = require("./helpers/jwtHelper");
dotenv.config();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

//var contactlists = require('./models/contact');

// mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();
var PORT = 5000;

app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/callback", function (request, response) {
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
  response.status(201).json({
    message: "Great Success",
  });
});

// app.use(jwtHelper());
// app.use(require("./routes"));
// app.use(require("./shedulerJobs"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(require("./helpers/appErrorHandler"));

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

module.exports = app;
