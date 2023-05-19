require('dotenv').config();

const {Client} = require("pg");

const pool = new Client({
  user: "postgres",
  password: "123456789",
  host: "localhost",
  port: 5432,
  database: "postgres"
});

pool.connect();


module.exports = pool;
