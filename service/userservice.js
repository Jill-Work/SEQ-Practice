//      Import files
const model = require('../models');


// ---------------------------------------------------------------------------------------------------

//      find all users
exports.getUsers = async (size, page) => {
    page = page - 1;
    return await model.user.findAll({
        limit: parseInt(size),      //  parseInt is use to convert string into integer value
        offset: parseInt(size) * parseInt(page),
        attributes: ['id','first_name', 'last_name'],
        include: [
            {
                model: model.booking,
                attributes: [['first_name', 'name'], ['last_name', 'last']]
            }
        ]
    });
};

//      find one user
exports.getUser = async (id) => {
    return await model.user.findOne({
        attributes: ['first_name', 'last_name'],
        include: [
            {
                model: model.booking,
                attributes: [['first_name', 'name'], ['last_name', 'last']]
            }
        ],
        where: { id: id }
    });
};

//      add user
exports.addUser = async (data) => {
    return await model.user.create(data);
};

//      update user
exports.updateUser = async (id, update) => {
    return await model.user.update(update, { where: { id: id } });
};

//      delete user
exports.deleteUser = async (id) => {
    return await model.user.destroy(id);
}
