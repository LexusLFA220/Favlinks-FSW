const Pool = require('pg').Pool
const pool = new Pool({
  user: '<username>',
  host: 'localhost',
  database: 'favlinks',
  password: '<password>',
  port: 5432,
})