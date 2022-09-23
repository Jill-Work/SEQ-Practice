//      variables
const express = require('express');
const router = express.Router();

//      Import files
const { booking } = require('../models');
const users = require('./users');
const bookings = require('./bookings');
const test = require('./test');

// ---------------------------------------------------------------------------------------------------


router.get('/',function(req, res){
    res.send("it's home page of /api options 'users' , 'booking' ");
});

router.use('/users',users);

router.use('/bookings', bookings);

// router.use('/test', test);

router.get('/get',(req,res)=>{
    let i = 1
    for (i=i; i<10; i++) {
        console.log(`user   ${i}`);
        res.send(`user  ${i}`);
    }
    
    // for (let index = 1; index < 10; index++) {
    //     // const element = array[index];
    //     console.log("Element", index);
        
    // }
});



// ---------------------------------------------------------------------------------------------------


module.exports = router;