
var stock = require('../model/StockModel.js')


//for adding stocks
function addStock (req,res,next){

    console.log(req.body);
    stock.create({
        stock_name:req.body.stock_name,
        price:req.body.price,
        brand:req.body.brand,
        image:req.body.image
    })
    .then(function(result){
    
    console.log(result);
    res.status(201);
    res.json({
        satus:201,
        message:"Stock has been added."
    })
    })
    .catch(function(err){
    console.log(err)
    next(err);
    })
    
    }







module.exports = { 
    addStock
};