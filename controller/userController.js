
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
        // image:req.body.image
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
	user.findAll().then(function (result){
            if(!result===0){
                res.satus(200);
            res.json({
                data:result
            });
                 
            }else{
                res.satus(500);
                res.json({
                    messsage:"server error"
                }); 
        }
    }).catch(function(err){

    })
}


// Delete Users
function deleteUser(req, res, next){
    if(req.params.id === null || undefined){
        res.json({
            status:500,
            message:'ID not given.'
        })
    }
   
    user.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(function(result){
        console.log(req.params.id);
        if(result === 0){
            res.json({
                satus:404,
                message:'user not found'
            })
        }else{
            res.status(200)
            res.json({
                status:200,
                message:'user deleted successfully'
            })

        }
       
    }) 
    .catch(function(err){
        next(err);
    })
}

// Update Users
function updateUser(req, res, next){
    user.update({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        location:req.body.location
        //image:req.body.image
    },{
        where:{
            id:req.params.id
        }
    })
    .then(function(result){
        if(result === 0){
            res.json({status:404, message:'User Not found.'})
        }
        else{
            res.json({status:200, message:'User Updated.'})
        }
    })
    .catch(function(err){
        res.json({status:500, message:'Error updateing user'.user.username})
    })
    
}




module.exports = { 
    registerUser ,
    loginUser,
    getAllUsers,
    deleteUser,
    updateUser
};