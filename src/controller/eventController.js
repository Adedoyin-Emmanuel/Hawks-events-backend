const BadRequestError = require("../error/errors");
const Event = require("../models/events");

exports.getEventDyId = async (req, res) => {
  // Retrieve the event by its ID
  const eventId = req.params.id;

  try {
    const event = await Event.findOne({
      where: {
        id: eventId,
      },
    });
    if (!event) {
      res.status(404).json({ error: "Event not Found" });
    }
    // Send the event as the response
    res.status(200).json(event);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error retrieving event by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
};

//post events

exports.postEvent = async (req, res, next) => {
  console.log("hello");
  const {
    thumbnail,
    description,
    location,
    title,
    creator_id,
    start_date,
    end_date,
    start_time,
    end_time,
  } = req.body;
  let eventItem;
  console.log(description, location, title, creator_id, start_date, end_date);
  try {
    eventItem = await Event.create({
      thumbnail,
      description,
      title,
      creator_id,
      start_date,
      end_date,
      start_time,
      end_time,
      location,
    });
    if (!eventItem) {
      throw new BadRequestError("Invalid event data");
    }
    res.status(201).json({ statusCode: 201, message: "event created" });
  } catch (err) {
    next(err);
  }
};
