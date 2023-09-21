const Event = require("../models/events");

exports.updateEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const {
    title,
    description,
    location,
    start_date,
    end_date,
    start_time,
    end_time,
    thumbnail,
  } = req.body;

  try {
    // Check if the event exists
    const existingEvent = await Event.findByPk(eventId);

    if (!existingEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Update event details using Sequelize
    existingEvent.title = title;
    existingEvent.description = description;
    existingEvent.location = location;
    existingEvent.start_date = start_date;
    existingEvent.end_date = end_date;
    existingEvent.start_time = start_time;
    existingEvent.end_time = end_time;
    existingEvent.thumbnail = thumbnail;

    await existingEvent.save();

    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteEvent = async (req, res) => {
  const eventId = req.params.eventId;
  try {
    // Check if the event exists
    const existingEvent = await Event.findByPk(eventId);

    if (!existingEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    //delete the event
    await existingEvent.destroy();
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
