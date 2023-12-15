const express = require('express')
//const cors = require('cors')
const path = require('path')

const db = require('./db')

const app = express();

const PORT = 3000

const clientPath = path.resolve(__dirname, '../client/dist')

app.use(express.static(clientPath))
app.use(express.json())
//app.use(cors())
//Routes
app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
  })

  app.get('/api/links', db.getLinks)
  app.post('/api/links', db.createLink)
  app.delete('/api/links/id:', db.deleteLink)
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
