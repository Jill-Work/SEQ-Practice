//      Database
const db = require('../models/index');
const model = require('../models/index');

//      variables
const booking = db.booking;

//      Import files
const onetomany = require('../controller/onetomany');

// ---------------------------------------------------------------------------------------------------

exports.onetomany = async (id) => {

    return await model.user.findAll({
        attributes:['first_name','last_name'],
        include:[{
            model:booking,
            attributes:[['first_name','name'],['last_name','last']]
        }],
        where:{id:id}
    });
};