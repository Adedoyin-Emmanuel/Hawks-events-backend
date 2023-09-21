const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Define routes and link them to controller functions
router.get('/', eventController.getAllEvents);

router.get('/:eventId', eventController.getEventById);
// PUT /api/events/:eventId - Update event details
router.put('/:eventId', eventController.updateEvent);

// POST /api/events/ route
router.post('/', eventController.postEvent)

// DELETE /api/events/:eventId - Deletes an event
router.delete("/:eventId", eventController.deleteEvent);



module.exports = router;
