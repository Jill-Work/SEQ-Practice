//      variables
const express = require('express');
const router = express.Router();


//      Import files
const test = require('../controller/test');



router.get('/:first_name',test.test);





// ---------------------------------------------------------------------------------------------------


module.exports=router;