
const mongoose = require('mongoose');
require('dotenv').config()
function dbConnection() {

    // DB Connaction 
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected!'));

// DB Connaction    
}

module.exports = dbConnection