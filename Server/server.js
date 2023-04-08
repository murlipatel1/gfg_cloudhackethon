const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.use('/expenditure',require("./routes/expenditure"))
app.use('/finance',require("./routes/finance_planning"))


app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
