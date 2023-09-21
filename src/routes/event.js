const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");

// PUT /api/events/:eventId - Update event details
router.put("/:eventId", eventController.updateEvent);

// DELETE /api/events/:eventId - Deletes an event
router.delete("/:eventId", eventController.deleteEvent);


module.exports = router;
