
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
    







module.exports = { 
    addVehicle,
    listVehicle
};