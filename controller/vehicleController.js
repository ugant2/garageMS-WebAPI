
var vehicle = require('../model/VehicleModel.js')


//for adding stocks
function addVehicle (req,res,next){

    console.log(req.body);
    vehicle.create({
        vehicle_name:req.body.vehicle_name,
        price:req.body.price,
        brand:req.body.brand,
        image:req.body.image
    })
    .then(function(result){
    
    console.log(result);
    res.status(201);
    res.json({
        satus:201,
        message:"Vehicle has been added."
    })
    })
    .catch(function(err){
    console.log(err)
    next(err);
    })
    
}


// Listing
function listVehicle(req,res,next){
	vehicle.findAll().then(function (result){
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
    

// Delete Vehicle
function deleteVehicle(req, res, next){
    if(req.params.id === null || undefined){
        res.json({
            status:500,
            message:'ID not given.'
        })
    }
   
    vehicle.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(function(result){
        console.log(req.params.id);
        if(result === 0){
            res.json({
                satus:404,
                message:'vehicle not found'
            })
        }else{
            res.status(200)
            res.json({
                status:200,
                message:'vehicle deleted successfully'
            })

        }
       
    }) 
    .catch(function(err){
        next(err);
    })
}



// Update Vehicle
function updateVehicle(req, res, next){
    vehicle.update({
        vehicle_name:req.body.vehicle_name,
        price:req.body.price,
        brand:req.body.brand,
        image:req.body.image
    },{
        where:{
            id:req.params.id
        }
    })
    .then(function(result){
        if(result === 0){
            res.json({status:404, message:'Vehicle Not found.'})
        }
        else{
            res.json({status:200, message:'Vehicle Updated.'})
        }
    })
    .catch(function(err){
        res.json({status:500, message:'Error updateing Vehicle'.vehicle.vehicle_name})
    })
    
}



module.exports = { 
    addVehicle,
    listVehicle,
    deleteVehicle,
    updateVehicle
};