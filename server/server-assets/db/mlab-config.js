var mongoose = require('mongoose')
var connectionString = 'mongodb://inspireuser:inspirepassword1@ds046267.mlab.com:46267/inspire'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})