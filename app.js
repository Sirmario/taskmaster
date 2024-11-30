require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task");
const Db_URL = require("./config/keys").mongooseURI;
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
mongoose
  .connect(Db_URL)
  .then((conn) => {
    if (conn != null) console.log("connection established.");
  })
  .catch((err) => console.log(err));
app.use("/api/v1/task", taskRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => `server running on port ${port}`);
