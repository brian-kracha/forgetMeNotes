const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const knex = require('knex')

app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())


app.post('/new-signup', => (req, res, next){
  let data = req.query
  data.username
  data.email
  data.Dob
  data.secQues
  data.secAns
})



app.listen(PORT, function(){
  console.log('Server starting at localhost:'+PORT)
})


module.exports = app
