const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const formatLoger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLoger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("request done?");
  res.json("hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

// Встановлюємо значення порту для додатку
// app.set("port", process.env.PORT);
// app.listen(app.get("port"), () => {
//   console.log("Server is running");
// });
