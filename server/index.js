const express = require("express");
const { Pool } = require("pg");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Database connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rock paper scissor",
  password: "rooban@17",
  port: 5432,
});

// Router
const infoRouter = require("./router");
app.use("/info", infoRouter);

// Listen port
const PORT = process.env.PORT || 5015;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
