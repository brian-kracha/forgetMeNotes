'use strict';
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const path= require('path')
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);
const bcrypt = require('bcrypt')

app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())

app.use(express.static(path.join("public")));
app.get('/',(req,res,next)=>{
  res.redirect('landing.html')
})
// app.get('/dashboard')
app.post('/login', function (req, res, next){
  let data = req.body
  console.log(data.password)
  console.log(data.email)
   return knex('signup')
   .where('email', data.email)
   .first()
   .then(function(user) {
    if(!user) {
      res.status(401).send("Email doesnt exist")
    }
    if(bcrypt.compareSync(data.password, user.password)) {
      console.log('matched')
      res.status(200).send({message: "logged in"})
    }
    else{
      res.status(404).send("password doesn't match")
    }
  })
  .catch(function(err){
    return err
  })
})

app.post('/new-signup', function (req, res, next){
  let data = req.body
  bcrypt.hash(data.password,10)
  .then(function(hashedpassword){
    return knex('signup')
    .insert({
      username: data.username,
      email: data.email,
      password: hashedpassword,
      DOB: data.DOB,
      question: data.securityQuestion,
      answer: data.answer
    }, '*')
    .then(function(user) {
      let newUser = {
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
        password: user[0].password,
        DOB: user[0].DOB,
        question: user[0].question,
        answer: user[0].answer
      }
      res.send(newUser);
    })
  })
  .catch(function(err){
    next(err);
  })
})

app.use(function(req, res, next){
  res.status(404).json( { error: '404 bad stuff' } )
})

app.listen(PORT, function(){
  console.log('Server starting at localhost:' + PORT)
})


module.exports = app
