//      Import files
const model = require('../models');

// ---------------------------------------------------------------------------------------------------

//      find all Bookings
exports.getBookings = async (size , page ,search ,key ) => {
    page = page - 1;
    let condition = "";
    if(search != ""){
        condition = {where:{first_name:search}};

    }
    return await model.booking.findAll(condition,{
        limit: parseInt(size),      //  parseInt is use to convert string into integer value
        offset: parseInt(size) * parseInt(page),
        include: [
            {
                model: model.user
            }
        ],
    });
};

//      find one Booking
exports.getBooking = async (id) => {
    return await model.booking.findOne(
        {
        where: { id: id }
        }
    );
}; 

//      add Booking
exports.addBooking = async (data) => {
    return await model.booking.create(data);
};

//      update Booking
exports.updateBooking = async (id, update) => {
    return await model.booking.update(update, { where: { id: id } });
};

//      delete Booking
exports.deleteBooking = async (id) => {
    return await model.booking.destroy(id);
}
