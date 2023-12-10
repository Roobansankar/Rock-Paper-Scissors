const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rock paper scissor",
  password: "rooban@17",
  port: 5432,
});

router.post("/", async (req, res) => {
  try {
    const { User1Name, User2Name, User1Result, User2Result } = req.body;
    const query =
      "INSERT INTO player (User1Name, User2Name, User1Result, User2Result) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [User1Name, User2Name, User1Result, User2Result];
    const result = await pool.query(query, values);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM player";
    const result = await pool.query(query);
    console.log("Data fetched successfully:", result.rows);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
