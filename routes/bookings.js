//      variables
const express = require('express');
const router = express.Router();

//      Import files
const Bookingcontoller = require('../controller/bookingscontroller')
const {addbooking,updatebooking} = require('../middleware/index')

// ---------------------------------------------------------------------------------------------------

//      find Bookings
router.get('/',Bookingcontoller.getBookings);
router.get('/:id',Bookingcontoller.getBooking);

//      add Booking
router.post('/',addbooking.addbooking,Bookingcontoller.addBooking);

//      update Booking
router.put('/:id',updatebooking.updatebooking,Bookingcontoller.updateBooking);

//      delete Booking
router.delete('/:id',Bookingcontoller.deleteBooking);

// ---------------------------------------------------------------------------------------------------

module.exports = router;