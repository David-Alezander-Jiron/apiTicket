const express = require('express');
const router = express.Router();
const eventoPersonalCtl = require('../controller/eventoPersonal');

// Mostrar todo el personal del evento
router.get('/', eventoPersonalCtl.mostrar);

// Crear un nuevo personal del evento
router.post('/', eventoPersonalCtl.mandar);

// Obtener un personal del evento por ID
router.get('/:id', eventoPersonalCtl.obtenerPorId);

// Eliminar un personal del evento por ID
router.delete('/:id', eventoPersonalCtl.eliminar);

// Actualizar un personal del evento por ID
router.put('/:id', eventoPersonalCtl.actualizar);

module.exports = router;
