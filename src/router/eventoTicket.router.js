const express = require('express');
const router = express.Router();
const eventoTicketCtl = require('../controller/eventoTicket');

// Mostrar todos los tickets del evento
router.get('/', eventoTicketCtl.mostrar);

// Crear un nuevo ticket del evento
router.post('/', eventoTicketCtl.mandar);

// Obtener un ticket del evento por ID
router.get('/:id', eventoTicketCtl.obtenerPorId);

// Eliminar un ticket del evento por ID
router.delete('/:id', eventoTicketCtl.eliminar);

// Actualizar un ticket del evento por ID
router.put('/:id', eventoTicketCtl.actualizar);

module.exports = router;
