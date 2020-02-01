
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







module.exports = { 
    addVehicle
};