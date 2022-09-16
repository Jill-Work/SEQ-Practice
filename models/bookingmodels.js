module.exports = (sequelize , DataTypes)=>{
    const Booking = sequelize.define('bookings', {
        first_name:{
            type:DataTypes.STRING,
        },
        last_name:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        phone_no:{
            type:DataTypes.INTEGER,
        },
        from:{
            type:DataTypes.STRING,
        },
        to:{
            type:DataTypes.STRING,
        },
        date:{
            type:DataTypes.STRING,
        },
        time:{
            type:DataTypes.STRING,
        }

    });

    

    return Booking;
}
