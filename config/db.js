const mongoose = require("mongoose");

const { DATABASE_URI } = process.env;

mongoose
  .connect(DATABASE_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
