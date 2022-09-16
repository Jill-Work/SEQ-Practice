//      variables
const express = require('express');
const router = express.Router();

//      Import files
const { booking } = require('../models');
const users = require('./users');
const bookings = require('./bookings');
const onetoone = require('./onetoone');
const onetomany = require('./onetomany');


// ---------------------------------------------------------------------------------------------------


router.get('/',function(req, res){
    res.send("it's home page of /api options 'users' , 'booking' ");
});

router.use('/users',users);

router.use('/bookings', bookings);

router.use('/onetoone', onetoone);

router.use('/onetomany', onetomany);


// ---------------------------------------------------------------------------------------------------


module.exports = router;