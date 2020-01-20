"use strict";
const express = require('express');
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');
var multer  = require('multer');
var upload = multer({ dest: 'images/' });
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Index page
app.get("/",function(req,res){
        res.end("Welcome");
});     

// for user registration redirection
// app.post('/registration', upload.single('image'), userController.registerUser)

app.post('/registration', userController.registerUser)

// app.post('/registration',upload.single('image'), function (req, res) {
        
//       });


// for user login redirection
app.post('/login', userController.loginUser)

// for user delete redirection
app.delete('/user/:id',userController.deleteUser)

// for single user pdateing redirection 
app.put('/user/:id',userController.updateUser)

// listing all users
app.get('/users', userController.getAllUsers)


app.listen(3011);

module.exports=app;
