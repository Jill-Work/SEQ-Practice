//      Database
const db = require('../models/index');
const model = require('../models/index');

//      variables
const booking = db.booking;

//      Import files
const { test } = require('../controller/test');

// ---------------------------------------------------------------------------------------------------

exports.test = async () => {
    return await model.booking.findAll()

};




//      for more information ==>>  https://www.youtube.com/watch?v=WI2OTz_3ubE&t=286s