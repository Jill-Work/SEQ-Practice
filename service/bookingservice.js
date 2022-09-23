//      Import files
const model = require('../models');

// ---------------------------------------------------------------------------------------------------

//      find all Bookings
exports.getBookings = async (condition) => {
    return await model.booking.findAll(
        {
            ...condition,
            include: [
                {
                    model: model.user
                }
            ]

        }
    );
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
