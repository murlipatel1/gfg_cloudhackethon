const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// to get all data
router.get("/", authorize, async (req, res) => {
    try {
      // get todo name and description for a specified user id
      const users = await pool.query(
        "SELECT * FROM expenditure where user_id = $1",
        [req.user.id]
      );
      res.json(users.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  //create a todo, using authorize middleware
  router.post("/todos", authorize, async (req, res) => {
    try {
      console.log(req.body);
      const { Loan_id ,
        Ifsc_code ,
        Loan_amount ,
        Card_balance ,
        Credit_score ,
        Stock_name ,
        Stock_price ,
        Total_Stock_price} = req.body;
      const newTodo = await pool.query(
        "INSERT INTO expenditure (user_id,  Loan_id, Ifsc_code, Loan_amount, Card_balance, Credit_score, Stock_name, Stock_price, Total_Stock_price) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
        [req.user.id, Loan_id, Ifsc_code, Loan_amount, Card_balance, Credit_score, Stock_name, Stock_price, Total_Stock_price]
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
        "DELETE FROM expenditure WHERE exp = $1 AND user_id = $2 RETURNING *",
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