const Participant = require('../models/participant');

exports.getParticipants = async (req, res) => {
    const participants = await Participant.findAll({ where: { estado: true } });
    res.json(participants);
};

exports.createParticipant = async (req, res) => {
    const newParticipant = await Participant.create(req.body);
    res.json(newParticipant);
};

exports.updateParticipant = async (req, res) => {
    const { id } = req.params;
    const updatedParticipant = await Participant.update(req.body, { where: { id } });
    res.json(updatedParticipant);
};

exports.deleteParticipant = async (req, res) => {
    const { id } = req.params;
    await Participant.update({ estado: false }, { where: { id } });
    res.json({ message: 'Participant deleted logically' });
};
