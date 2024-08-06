const EventType = require('../models/eventType');

exports.getEventTypes = async (req, res) => {
    const eventTypes = await EventType.findAll({ where: { estado: true } });
    res.json(eventTypes);
};

exports.createEventType = async (req, res) => {
    const newEventType = await EventType.create(req.body);
    res.json(newEventType);
};

exports.updateEventType = async (req, res) => {
    const { id } = req.params;
    const updatedEventType = await EventType.update(req.body, { where: { id } });
    res.json(updatedEventType);
};

exports.deleteEventType = async (req, res) => {
    const { id } = req.params;
    await EventType.update({ estado: false }, { where: { id } });
    res.json({ message: 'Event type deleted logically' });
};
