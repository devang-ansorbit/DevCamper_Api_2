const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

// Route Files
const bootcamps = require('./routes/bootcamps');

// Load env
dotenv.config({ path: "./config/config.env" });

connectDB();


const app = express();

app.use(express.json());

app.use("/api/v1/bootcamps", bootcamps)


const PORT = process.env.PORT || 4000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

process.on('unhandleRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1))
})

// app.get("/api/v1", (req, res) => {
//   res.status(200).json({ success: true, status: 200 });
// });
