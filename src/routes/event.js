const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Get /api/events/:eventId - Get event details using Id
router.get('api/events/:eventId', eventController.getEventById);

// PUT /api/events/:eventId - Update event details
router.put('api/events/:eventId', eventController.updateEvent);

module.exports = router;
