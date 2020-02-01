var db = require('../configuration/dbConfig.js')


var vehicle = db.sequelize.define('Vehicle', {

//attributes
id: {
	type:db.Sequelize.INTEGER ,
	primaryKey: true,
	autoIncrement:true,
	allowNull:false
},
vehicle_name: {
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

freezeTableName: true,
tableName:'Vehicle',
paranoid:true

}
)

vehicle.sync({force: false})
 .then(function(){

 })
 .catch(function(err){

console.log(err)

 })

module.exports = vehicle;


