const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/user");

const app = express();
const formatLoger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLoger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
