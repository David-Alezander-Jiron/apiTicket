const express = require('express');
const router = express.Router();
const tipoEventoCtl = require('../controller/tipoEvento');

// Rutas para el manejo de tipos de eventos
router.get('/', tipoEventoCtl.mostrar); // Mostrar todos los tipos de eventos
router.post('/', tipoEventoCtl.mandar); // Crear un nuevo tipo de evento
router.get('/:id', tipoEventoCtl.obtenerPorId); // Obtener un tipo de evento por ID
router.delete('/:id', tipoEventoCtl.eliminar); // Eliminar un tipo de evento por ID
router.put('/:id', tipoEventoCtl.actualizar); // Actualizar un tipo de evento por ID

module.exports = router;
