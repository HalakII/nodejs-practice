const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("request done?");
  res.json("hello world");
});

app.listen(3000, () => {
  console.log("Server is running");
});
