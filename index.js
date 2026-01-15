const express = require('express')
const dbConnection = require('./database/dbConnection')
const  route  = require('./route')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// DB Connaction 
dbConnection()
// DB Connaction 

// API Connaction 
app.use(route)
// API Connaction 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
