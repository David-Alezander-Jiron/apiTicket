const Ticket = require('../models/ticket');

exports.getTickets = async (req, res) => {
    const tickets = await Ticket.findAll({ where: { estado: true } });
    res.json(tickets);
};

exports.createTicket = async (req, res) => {
    const newTicket = await Ticket.create(req.body);
    res.json(newTicket);
};

exports.updateTicket = async (req, res) => {
    const { id } = req.params;
    const updatedTicket = await Ticket.update(req.body, { where: { id } });
    res.json(updatedTicket);
};

exports.deleteTicket = async (req, res) => {
    const { id } = req.params;
    await Ticket.update({ estado: false }, { where: { id } });
    res.json({ message: 'Ticket deleted logically' });
};
