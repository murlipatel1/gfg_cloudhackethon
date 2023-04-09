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

  //create a todo, using authorize middleware
router.post("/todos", authorize, async (req, res) => {
  try {
    console.log(req.body);
    const { Bike_amount, Car_amount, Home_amount, Loan_with_interest } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (user_id, Bike_amount, Car_amount, Home_amount, Loan_with_interest) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [req.user.id, Bike_amount, Car_amount, Home_amount, Loan_with_interest]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
router.delete("/todos/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM finance_planning WHERE f_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user.id]
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