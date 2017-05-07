var express = require('express')
var path = require('path')
var cors = require('express-cors')

const app = express()

const db = require('../database/db_config.js');

app.use(cors({
  allowedOrigins: ['https://site@site.com/']
}))

app.use(express.static(__dirname + '/../client/dist'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is listening on PORT ${process.env.port || 3000}`)
})