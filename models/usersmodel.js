module.exports = (sequelize , DataTypes)=>{
    const User = sequelize.define('users', {
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
        }

    },{
        timestamps:false,
        // createdAt:false,
        // updateAt:false
    });

    return User;
}
