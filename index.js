const express = require('express')
const dbConnection = require('./database/dbConnection')
const  route  = require('./route')
const session = require('express-session')
const app = express()
const port = 4000

// session part 
app.use(session({
  secret: 'mern 2407',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
// session part 

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
