
var user = require('../model/UserModel.js')


//for user registration
function registerUser (req,res,next){

    console.log(req.body);
    user.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        location:req.body.location
        //image:req.body.image
    })
    .then(function(result){
    
    console.log(result);
    res.status(201);
    res.json({
        satus:201,
        message:"User has been registered"
    })
    })
    .catch(function(err){
    console.log(err)
    next(err);
    })
    
    }



module.exports = { 
    registerUser 
};