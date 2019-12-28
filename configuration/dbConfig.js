
var Sequelize  = require('sequelize')

var sequelize = new Sequelize('garageMS','ugant','ugant123',{
	host : 'localhost',
	dialect: 'mysql',
	logging:false
});
 sequelize.authenticate()
.then(
function(){ 
	console.log('Database connection successfull')
})
.catch(
	function(err){
	console.log(err)
})


module.exports = {
	Sequelize, sequelize
}