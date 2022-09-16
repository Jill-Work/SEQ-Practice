const{Sequelize , DataTypes}  = require('sequelize');   // require 

const sequelize = new Sequelize('boat_booking', 'root', '', {       //database deceleration 
    host:'localhost',
    dialect:'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./usersmodel')(sequelize,DataTypes);
db.booking = require('./bookingmodels')(sequelize,DataTypes);

db.user.hasMany(db.booking);
db.booking.belongsTo(db.user); 


db.sequelize.sync({force:false})
.then(()=>{
    console.log("##     R E _ S Y N C      ##")
})
.catch((error)=>{
    console.log("##     E R R O R        "+error)
});

// ---------------------------------------------------------------------------------------------------

module.exports=db;

