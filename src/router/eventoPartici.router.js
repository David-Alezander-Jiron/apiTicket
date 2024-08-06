const express = require('express');
const router = express.Router();
const eventoParticipantesCtl = require('../controller/eventoParticipantes');

// Mostrar todos los participantes del evento
router.get('/', eventoParticipantesCtl.mostrar);

// Crear un nuevo participante del evento
router.post('/', eventoParticipantesCtl.mandar);

// Obtener un participante del evento por ID
router.get('/:id', eventoParticipantesCtl.obtenerPorId);

// Eliminar un participante del evento por ID
router.delete('/:id', eventoParticipantesCtl.eliminar);

// Actualizar un participante del evento por ID
router.put('/:id', eventoParticipantesCtl.actualizar);

module.exports = router;
