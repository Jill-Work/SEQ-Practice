//      variables
const express = require('express');
const router = express.Router();


//      Import files
const onetoone = require('../controller/onetoone');



router.get('/:id',onetoone.onetoone);


// ---------------------------------------------------------------------------------------------------


module.exports=router;