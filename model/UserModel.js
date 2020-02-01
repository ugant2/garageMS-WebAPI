var db = require('../configuration/dbConfig.js')


var user = db.sequelize.define('User', {

//attributes
id: {
	type:db.Sequelize.INTEGER ,
	primaryKey: true,
	autoIncrement:true,
	allowNull:false
},
username: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
password: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
email:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
phone:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
location:{
	type:db.Sequelize.TEXT ,
	allowNull:false
},
image:{
	type:db.Sequelize.TEXT,
	allowNull:true
}
},
{

freezeTableName: false,
tableName:'User',
paranoid:true

}
)

 user.sync({force: true})
 .then(function(){

 })
 .catch(function(err){

console.log(err)

 })

module.exports = user;


