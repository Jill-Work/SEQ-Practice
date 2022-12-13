//      Import files
const BookingService = require('../service/bookingservice');

// ---------------------------------------------------------------------------------------------------

//      find all Bookings
exports.getBookings = async (req, res) => {
    let condition = {};
    if (req.query.search) {
        condition = {

            where: {
                first_name: req.query.search
            }
        }
    } else {
        condition = {
            ...condition,           //      append  code after old code
            limit: parseInt(req.query.size),      //  parseInt is use to convert string into integer value
            offset: parseInt(req.query.size) * parseInt((req.query.page - 1)),
        }
    }
    const Booking = await BookingService.getBookings(condition);
    res.send(Booking);
};

//      find one Booking
exports.getBooking = async (req, res) => {
    const id = req.params.id;
    const search = req.query.search;

    const Booking = await BookingService.getBooking(id, search);
    res.send(Booking);
};

//      add Booking
exports.addBooking = async (req, res) => {
    const Booking = await BookingService.addBooking(req.body);
    res.send(Booking);
};

//      update Booking
exports.updateBooking = async (req, res) => {
    const id = req.params.id;
    const update = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_no: req.body.phone_no,
        from: req.body.from,
        to: req.body.to,
        date: req.body.date,
        time: req.body.time
    }
    const Booking = await BookingService.updateBooking(id, update);
    res.send(update)
};

//      delete Booking
exports.deleteBooking = async (req, res) => {
    const Booking = await BookingService.deleteBooking(id);
    res.send("frlrted id was " + id)
};



