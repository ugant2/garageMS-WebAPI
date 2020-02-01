"use strict";
const express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var userController = require('./controllers/userController.js');
=======
var userController = require('./controller/userController.js');
var stockController = require('./controller/stockController.js');
var vehicleController = require('./controller/vehicleController.js');
>>>>>>> 66b5e72a5cb45a7389da8a5717b731bbc6954c68
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

// for single user updateing redirection 
app.put('/user/:id',userController.updateUser)

// listing all users
app.get('/user', userController.getAllUsers)



// for stocks
app.post('/stock', stockController.addStock)


// for Vehicles
app.post('/vehicle', vehicleController.addVehicle)




app.listen(3011);

module.exports=app;
