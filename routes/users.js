//      variables
const express = require('express');
const router = express.Router();

//      Import files
const usercontoller = require('../controller/userscontroller')
const {adduser,updateuser} = require('../middleware/index')

// ---------------------------------------------------------------------------------------------------

//      find users
router.get('/',usercontoller.getUsers);
router.get('/:id',usercontoller.getUser);

//      add user
router.post('/',adduser.adduser,usercontoller.addUser);

//      update user
router.put('/:id',updateuser.updateuser,usercontoller.updateUser);

//      delete user
router.delete('/:id',usercontoller.deleteUser);

// ---------------------------------------------------------------------------------------------------


module.exports = router;