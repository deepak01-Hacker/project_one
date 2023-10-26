const express = require("express");
var cors = require("cors");

const app = express();
const errorMiddleware = require("./middleware/error");
var bodyParser = require("body-parser");
require("dotenv").config();

// const fileUpload = require("express-fileupload"); use this code for to accept file to upload over the apis

/*          packages                         */

app.use(bodyParser.json());
app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: '/tmp' //custom dir path so we have to only clean the one directory
//   })
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorMiddleware);

const routes = require("./routes/routes");

app.use("/api", routes);


app.get("/api/health", (req, res) => {
  res.send("OK");
});

module.exports = app;