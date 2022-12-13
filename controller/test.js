//      Database
const db = require('../middleware/index');

//      variables


//      Import files
const test = require('../service/test');

// ---------------------------------------------------------------------------------------------------

exports.test = async(req,res)=>{
    
    const Booking = await test.test();
    res.send(Booking);
};
