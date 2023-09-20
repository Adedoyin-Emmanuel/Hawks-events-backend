const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// PUT /api/events/:eventId - Update event details
router.put('api/events/:eventId', eventController.updateEvent);

module.exports = router;