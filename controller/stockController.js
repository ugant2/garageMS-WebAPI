
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


// Delete Users
function deleteStock(req, res, next){
    if(req.params.id === null || undefined){
        res.json({
            status:500,
            message:'ID not given.'
        })
    }
   
    stock.destroy({
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
                message:'stock deleted successfully'
            })

        }
       
    }) 
    .catch(function(err){
        next(err);
    })
}







module.exports = { 
    addStock,
    deleteStock
};