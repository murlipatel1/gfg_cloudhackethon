const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");
const bcrypt = require("bcrypt");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const jwtAuth = require("../routes/jwtAuth");

// to get all data
router.get("/", authorize, async (req, res) => {
  try {
    // get todo name and description for a specified user id
    const users = await pool.query("SELECT * FROM expenditure");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// to get 1 data
router.get("/exp/:id", authorize, async (req, res) => {
  try {
    // get todo name and description for a specified user id
    const users = await pool.query(
      "SELECT * FROM expenditure where user_id = $1",
      [req.user_id]
    );
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//NOT WORKING:create a todo, using authorize middleware
router.post("/exp", authorize, async (req, res) => {
  try {
    console.log(req.body);
    const {
      loan_id,
      ifsc_code,
      loan_amount,
      card_type,
      card_number,
      card_amount,
      stock_name,
      stock_price,
      mf_name,
      mf_price
    } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO expenditure (user_id,loan_id, ifsc_code, loan_amount,card_type,card_number, card_amount,stock_name,stock_price,mf_name,mf_price) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        req.user.id,
        loan_id,
        ifsc_code,
        loan_amount,
        card_type,
        card_number,
        card_amount,
        stock_name,
        stock_price,
        mf_name,
        mf_price
      ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



//delete a todo
router.delete("/exp/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM expenditure WHERE exp = $1 AND user_id = $2 RETURNING *",
      [id, req.user_id]
    );

    if (deleteTodo.rows.length === 0) {
      return res.json("This todo is not yours");
    }

    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
