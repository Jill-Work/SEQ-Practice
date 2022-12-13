//      Import files
const userService = require('../service/userservice');

// ---------------------------------------------------------------------------------------------------

//      find all users
exports.getUsers = async (req, res) => {
    let condition = {};

    if (req.query.search) {
        condition = {

            where: {
                first_name: req.query.search
            }
        }
    } else {
        condition = {
            ...condition,       //      append  code after old code
            limit: parseInt(req.query.size),      //  parseInt is use to convert string into integer value
            offset: parseInt(req.query.size) * parseInt((req.query.page - 1)),
        }

    };
    const user = await userService.getUsers(condition);
    res.send(user);
};

//      find one user
exports.getUser = async (req, res) => {
    const id = req.params.id
    const user = await userService.getUser(id);
    console.log(user);
    res.send(user);
};

//      add user
exports.addUser = async (req, res) => {
    const user = await userService.addUser(req.body);
    res.send(user);
};

//      update user
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const update = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_no: req.body.phone_no
    }
    const user = await userService.updateUser(id, update);
    res.send(update)
};

//      delete user
exports.deleteUser = async (req, res) => {
    const user = await userService.deleteUser(id);
};



