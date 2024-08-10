const express = require('express');
const router = express.Router();
const eventosCtl = require('../controller/eventoController');

// Mostrar todos los eventos
router.get('/eventos', eventosCtl.getEventos);

// Crear un nuevo evento
router.post('/eventos', eventosCtl.crearEvento);

// Obtener un evento por ID
router.get('/eventos/:id', eventosCtl.getEventoById);

// Eliminar un evento por ID
router.delete('/eventos/:id', eventosCtl.deleteEvento);

// Actualizar un evento por ID
router.put('/eventos/:id', eventosCtl.updateEvento);

module.exports = router;