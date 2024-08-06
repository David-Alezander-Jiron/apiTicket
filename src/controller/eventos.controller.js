const Event = require('../models/event');

exports.getEvents = async (req, res) => {
    const events = await Event.findAll({ where: { estado: true } });
    res.json(events);
};

exports.createEvent = async (req, res) => {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const updatedEvent = await Event.update(req.body, { where: { id } });
    res.json(updatedEvent);
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    await Event.update({ estado: false }, { where: { id } });
    res.json({ message: 'Event deleted logically' });
};
