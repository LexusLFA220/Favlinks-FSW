const express = require('express')

const path = require('path')

const app = express();

const PORT = 300

const clientPath = path.resolve(favlinks-fsw, '../client/dist')

app.use(express.static(clientPath))

app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
  })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
