
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


// List Stock
function getAllStock(req,res,next){
    stock.findAll().then(function(result){
            if(result===null){
                res.status(404);
            }
                else{
                    res.status(200);
                    res.json({
                        data:result
                    })
                }
            
    }).catch(function(err){

    });
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
                message:'stock not found'
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


// Update Stock
function updateStock(req, res, next){
    stock.update({
        stock_name:req.body.stock_name,
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
            res.json({status:404, message:'Stock Not found.'})
        }
        else{
            res.json({status:200, message:'Stock Updated.'})
        }
    })
    .catch(function(err){
        res.json({status:500, message:'Error updateing stock'.stock.stock_name})
    })
    
}







module.exports = { 
    addStock,
    getAllStock,
    deleteStock,
    updateStock
};