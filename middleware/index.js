//      Database


//      variables
const joi = require('joi');

//      Import files
require('../index.js');
const addUser = require("./usermiddleware");

// ---------------------------------------------------------------------------------------------------

//      Users
exports.adduser = require('./usermiddleware');
exports.updateuser = require('./usermiddleware');

//      Bookings
exports.addbooking = require('./bookingmiddleware');
exports.updatebooking = require('./bookingmiddleware');

