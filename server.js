const express = require("express");
const dotenv = require("dotenv");

// Route Files
const bootcamps = require('./routes/bootcamps');

// Load env
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/bootcamps", bootcamps)


const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// app.get("/api/v1", (req, res) => {
//   res.status(200).json({ success: true, status: 200 });
// });
