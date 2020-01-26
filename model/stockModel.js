var db = require('../configuration/dbConfig.js')


var stock = db.sequelize.define('Stock', {

//attributes
id: {
	type:db.Sequelize.INTEGER ,
	primaryKey: true,
	autoIncrement:true,
	allowNull:false
},
stock_name: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
price: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
brand:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
image:{
	type:db.Sequelize.TEXT,
	allowNull:true
}
},
{

freezeTableName: false,
tableName:'Stock',
paranoid:true

}
)

 user.sync({force: true})
 .then(function(){

 })
 .catch(function(err){

console.log(err)

 })

module.exports = stock;


