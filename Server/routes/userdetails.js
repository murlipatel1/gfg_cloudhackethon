const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");
const bcrypt = require("bcrypt");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const jwtAuth = require("../routes/jwtAuth");

router.post("/addinfo", authorize, async(req, res) => {
    try {
        console.log(req.body);
        const { address, aadharvid, pannumber, dob, phonenumber } = req.body;
        const newAddInfo = await pool.query(
          "INSERT INTO userdetails (user_id, address, aadharvid, pannumber, dob, phonenumber) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [req.user.id, address, aadharvid, pannumber, dob, phonenumber]
        );
        res.json(newAddInfo.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
})

module.exports = router;