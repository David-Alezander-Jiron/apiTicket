const express = require('express');
const router = express.Router();
const eventosPersonalsCtl = require('../controller/eventoPersonal');

// Mostrar todo el personal del evento
router.get('/eventos-personals', eventosPersonalsCtl.getEventosPersonals);

// Crear un nuevo personal del evento
router.post('/eventos-personals', eventosPersonalsCtl.crearEventoPersonal);

// Obtener un personal del evento por ID
router.get('/eventos-personals/:id', eventosPersonalsCtl.getEventoPersonalById);

// Eliminar un personal del evento por ID
router.delete('/eventos-personals/:id', eventosPersonalsCtl.deleteEventoPersonal);

// Actualizar un personal del evento por ID
router.put('/eventos-personals/:id', eventosPersonalsCtl.updateEventoPersonal);

module.exports = router;
