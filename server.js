const app = require("./src/app");
const { PORT, DB_HOST } = require("./src/config");
const mongoose = require("mongoose");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection succesful ");
    app.listen(PORT, (error) => {
      if (error) {
        console.log("error:app>>>", error);
        process.exit(1);
      } else {
        console.log("Server is running. PORT:", PORT);
      }
    });
  })
  .catch((error) => {
    console.log("error:DB>>>", error);
    process.exit(1);
  });
