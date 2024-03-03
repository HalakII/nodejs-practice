const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const error = require("./src/helpers/error.js");

const app = express();
const formatLoger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLoger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  const myError = error(401, "My error 1");
  next(myError);
  return;
  res.json("Hello world");
});

app.get("/flower", (req, res, next) => {
  const myError = error(402, "My error 2");
  next(myError);
  return;
  res.json("Love flowers");
});

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

// Встановлюємо значення порту для додатку
// app.set("port", process.env.PORT);
// app.listen(app.get("port"), () => {
//   console.log("Server is running");
// });
