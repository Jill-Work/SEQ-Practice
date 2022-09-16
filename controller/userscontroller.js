//      Import files
const userService = require('../service/userservice');

// ---------------------------------------------------------------------------------------------------

//      find all users
exports.getUsers = async(req,res) => {
    const {size , page} = req.query;
    const user = await userService.getUsers( size , page);
    console.log(user);
    res.send(user);
};

//      find one user
exports.getUser = async(req,res) => {
    const id = req.params.id
    const user = await userService.getUser(id);
    console.log(user);
    res.send(user);
};

//      add user
exports.addUser = async(req,res) => {
    const user = await userService.addUser(req.body);
    res.send(user);
};

//      update user
exports.updateUser = async(req,res) => {
    const id = req.params.id;
    const update ={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone_no:req.body.phone_no
    }
    const user = await userService.updateUser(id,update);
    res.send(update)
};

//      delete user
exports.deleteUser = async(req,res) => {
    const user = await userService.deleteUser(id);
};



