const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// to get all data
router.get("/", authorize, async (req, res) => {
    try {
      // get todo name and description for a specified user id
      const user = await pool.query(
        "SELECT * FROM finance_planning where user_id = $1",
        [req.user.id]
      );
      res.json(user.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
module.exports = router;