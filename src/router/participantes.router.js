const express = require('express');
const router = express.Router();
const participantesCtl = require('../controller/participantes');

// Ruta para crear un nuevo participante
router.post('/participantes', participantesCtl.crearParticipante);

// Ruta para obtener todos los participantes
router.get('/participantes', participantesCtl.getParticipantes);

// Ruta para obtener un participante por ID
router.get('/participantes/:id', participantesCtl.getParticipanteById);

// Ruta para actualizar un participante por ID
router.put('/participantes/:id', participantesCtl.updateParticipante);

// Ruta para borrar un participante por ID (marcar como eliminado)
router.delete('/participantes/:id', participantesCtl.deleteParticipante);

module.exports = router;
