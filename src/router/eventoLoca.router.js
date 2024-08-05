const express = require('express');
const router = express.Router();
const eventoLocacionCtl = require('../controller/eventoLocacion');

// Mostrar todas las locaciones de eventos
router.get('/', eventoLocacionCtl.mostrar);

// Crear una nueva locación de evento
router.post('/', eventoLocacionCtl.mandar);

// Obtener una locación de evento por ID
router.get('/:id', eventoLocacionCtl.obtenerPorId);

// Eliminar una locación de evento por ID
router.delete('/:id', eventoLocacionCtl.eliminar);

// Actualizar una locación de evento por ID
router.put('/:id', eventoLocacionCtl.actualizar);

module.exports = router;
