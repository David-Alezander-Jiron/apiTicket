const express = require('express');
const router = express.Router();
const ticketsCtl = require('../controller/tickets');

// Ruta para crear un nuevo ticket
router.post('/tickets', ticketsCtl.crearTicket);

// Ruta para obtener todos los tickets
router.get('/tickets', ticketsCtl.getTickets);

// Ruta para obtener un ticket por ID
router.get('/tickets/:id', ticketsCtl.getTicketById);

// Ruta para actualizar un ticket por ID
router.put('/tickets/:id', ticketsCtl.updateTicket);

// Ruta para borrar un ticket por ID (marcar como eliminado)
router.delete('/tickets/:id', ticketsCtl.deleteTicket);

module.exports = router;
