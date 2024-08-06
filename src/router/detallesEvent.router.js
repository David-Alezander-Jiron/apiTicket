const express = require('express');
const router = express.Router();
const detallesModelCtl = require('../controller/detallesEventController');

// Mostrar todos los detalles del modelo
router.get('/', detallesModelCtl.mostrar);

// Crear un nuevo detalle del modelo
router.post('/', detallesModelCtl.mandar);

// Obtener un detalle del modelo por ID
router.get('/:id', detallesModelCtl.obtenerPorId);

// Eliminar un detalle del modelo por ID
router.delete('/:id', detallesModelCtl.eliminar);

// Actualizar un detalle del modelo por ID
router.put('/:id', detallesModelCtl.actualizar);

module.exports = router;
