//      Import files
const model = require('../models');


// ---------------------------------------------------------------------------------------------------

//      find all users
exports.getUsers = async (condition) => {
        return await model.user.findAll(

        {
            ...condition,
            include: [
                {
                    model: model.booking,
                }
            ]
        }
    );
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

    for (i=1; i<51; i++){
        return await model.user.create(data);
        console.log(i)
        
    }
    console.log(data);


};

//      update user
exports.updateUser = async (id, update) => {
    return await model.user.update(update, { where: { id: id } });
};

//      delete user
exports.deleteUser = async (id) => {
    return await model.user.destroy(id);
}
