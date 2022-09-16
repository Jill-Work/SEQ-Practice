//     Import files

const express = require('express');
const router = express.Router();
const onetomany = require('../controller/onetomany')


router.get('/:id',onetomany.onetomany);

module.exports=router;