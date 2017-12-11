const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const knex = require('knex')
const path = require('path');


app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())

app.use(express.static(path.join("public")));
app.get('/',(req,res,next)=>{
  res.redirect('landing.html')
})
app.post('/login', function (req, res, next){
  let data = req.body
  console.log(data.password)
  console.log(data.email)
})

app.post('/new-signup', function (req, res, next){
  let data = req.body

  console.log(data.username)
  console.log(data.password)
  console.log(data.email)
  console.log(data.DOB)
  console.log(data.securityQuestion)
  console.log(data.answer)
  return knex('signup')
  .inerst({
    username: data.username,
    email: data.email,
    password: data.password,
    DOB: data.DOB,
    question: data.securityQuestion,
    answer: data.answer
  })
})

app.use(function(req, res, next){
  res.status(404).json( { error: '404 bad stuff' } )
})

app.listen(PORT, function(){
  console.log('Server starting at localhost:'+PORT)
})


module.exports = app
