const Pool = require('pg').Pool
const pool = new Pool({
  user: 'alexa',
  host: 'localhost',
  database: 'favlinks',
  password: 'lexus',
  port: 5432,
})

 //Get all links from db
 const getLinks = (req, res) => {
  pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const createLink = (req, res) => {
  const name = request.body.name
  const url = request.body.url
  pool.query('INSERT INTO favlinks (name,url) VALUES ($1,$2)',[name,url], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Link added with ID: ${results.rows[0].id}`)
  })
}

const deleteLink = (req, res) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Link deleted with ID: ${id}`)
  })
}

module.exports = {
  getLinks,createLink,deleteLink
}