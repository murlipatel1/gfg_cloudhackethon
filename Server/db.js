require("dotenv").config();
const { Client } = require("pg");

// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE
// });

// Murli
const pool = new Client({
  user: "postgres",
  password: "123456789",
  host: "localhost",
  port: 5432,
  database: "postgres"
});

//Shruti
// const pool = new Client({
//   user: "postgres",
//   password: "post@2023",
//   host: "localhost",
//   port: 5432,
//   database: "gfgdb",
// });

pool.connect();

module.exports = pool;
