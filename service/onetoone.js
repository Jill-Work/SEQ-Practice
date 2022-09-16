//      Database
const db = require('../models/index');
const model = require('../models/index');

//      variables
const booking = db.booking;

//      Import files
const { onetoone } = require('../controller/onetoone');

// ---------------------------------------------------------------------------------------------------

exports.onetoone = async (id) => {

    return await model.user.findOne({
        include:[{
            model:booking,
            attributes:['id','first_name','last_name','email','phone_no',
                        'from','to','date','time',['createdAt','created_At'],
                        ['updatedAt','updated_At']]
        }],
        where:{id:id}
    });
};



//      for more information ==>>  https://www.youtube.com/watch?v=WI2OTz_3ubE&t=286s