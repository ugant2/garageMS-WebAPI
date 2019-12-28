
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


// User Login and validation
function loginUser(req, res, next){
   user.findOne({
    where:{username:req.body.username}
   })
   .then(function(result){
       if(result !== null){
        console.log("User is found")
            // dataValues.password = password retrived from Database
            if(req.body.password === result.dataValues.password){
                res.json({
                    user:req.body.username,
                    login:"sucess"
                })
            }else{
                res.json({
                    user:req.body.username,
                    login:"Password did not match."
                })
            }

       }
       else{
           console.log("User not registered")
       }
   })
   .catch(function(err){
       next(err)
   })

}


function getAllUsers(req,res,next){

	// send all users from db

	user.findAll()
	// .then()
}







module.exports = { 
    registerUser ,
    loginUser,
    getAllUsers
};