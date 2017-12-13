'use strict';
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const path= require('path')
// const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile');
const knex = require('knex');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cookieParser())
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
   return knex('signup')
   .where('email', data.email)
   .first()
   .then(function(user) {
    if(!user) {
      res.status(401).send("Email doesnt exist")
    }
    if(bcrypt.compareSync(data.password, user.password)) {
      var token = jwt.sign({ id: user.id }, 'A4e2n84E0OpF3wW21')
      res.status(200).send({message: "logged in", token: token})
    }
    // if(bcrypt.compareSync(data.password, user.password)) {
    //   var token = jwt.sign({ id: user.id }, 'A4e2n84E0OpF3wW21')
    //   res.status(200).send({message: "logged in", token: token})
    // }
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
app.post('/notes', function(req, res, next){
  let data = req.body
  console.log(data)
  let pin = data.pin.replace(/(\r\n|\n|\r)/g,"");
  if(pin === 'public') {
    pin = true
  }
  else {
    pin = false
  }
  return knex('notes')
  .insert({
    title: data.title,
    note: data.textOnNotes,
    priority: data.priority,
    tag: data.tag,
    reminder: data.reminder,
    pin: pin
  }, '*')
  .then(function(note) {
    let newNotes = {
      id: note[0].id,
      title: note[0].title,
      note: note[0].textOnNotes,
      priority: note[0].priority,
      tag: note[0].tag,
      reminder: note[0].reminder,
      pin: note[0].pin
    }
    res.send(newNotes);
  })
})
// app.get('/notes',(req,res,next)=>{
//
// app.post('/notes', function(req, res, next){
//   cat
//
// })
app.get('/categories',(req,res,next)=>{
  let cookie = req.cookies
  var decoded = jwt.verify(cookie.jwt, 'A4e2n84E0OpF3wW21', function(err, decoded) {
 if(err){
     console.log(err)
 }else{
     return decoded
 }
})
  return knex('categories')
  .where('user_id', decoded.id)
  .orderBy('title')
  .then(function(categories){
    res.send(categories)
  })
  .catch(function(err){
    next(err)
  })
})

app.post('/categories',(req,res,next)=>{
  let cookie = req.cookies
  var decoded = jwt.verify(cookie.jwt, 'A4e2n84E0OpF3wW21', function(err, decoded) {
   if(err){
       console.log(err)
   }else{
       return decoded
   }
 })
  return knex('categories')
  .insert({
    title : req.body.title,
    summary : "hello",
    // user_id : decoded.id,
    image_url : req.body.color
  }, '*')
  .then(function(category) {
    let newCategory = {
      id : category[0].id,
      title : category[0].title,
      summary : category[0].summary,
      user_id : category[0].user_id,
      image_url : category[0].image_url
    }
    res.send(newCategory)
  })
  .catch(function(err){
    next(err)
  })
})

app.use(function(req, res, next){
  res.status(404).json( { error: '404 bad stuff' } )
})


app.listen(PORT, function(){
  console.log('Server starting at localhost:' + PORT)
})


module.exports = app
