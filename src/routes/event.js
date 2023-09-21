const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Get /api/events/:eventId - Get event details using Id
<<<<<<< HEAD
router.get('/:eventId', eventController.getEventById);

// PUT /api/events/:eventId - Update event details
router.put('/:eventId', eventController.updateEvent);

// POST /api/events/ route
router.post('/', eventController.postEvent)
=======
router.get('api/events/:eventId', eventController.getEventById);

// PUT /api/events/:eventId - Update event details
router.put('api/events/:eventId', eventController.updateEvent);
>>>>>>> ef79a781f8b0bc236b284b700ba66026395af2df

module.exports = router;
