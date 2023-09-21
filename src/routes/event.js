const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Get /api/events/:eventId - Get event details using Id
//router.get('/:eventId', eventController.getEventById);

// PUT /api/events/:eventId - Update event details
router.put('/:eventId', eventController.updateEvent);

// POST /api/events/ route
router.post('/', eventController.postEvent)

module.exports = router;
