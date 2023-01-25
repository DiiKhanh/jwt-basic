const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const schoolRouter = require("./routes/school");
const userRouter = require("./routes/user");

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGOSE_URL, () => {
  console.log("connected to mongosedb");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// route

// school
app.use("/v1/school", schoolRouter);

// user
app.use("/v1/user", userRouter);
app.listen(8000, () => {
  console.log("sever is running port 8000");
});
