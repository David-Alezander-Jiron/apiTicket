// router/personal.router.js
const express = require('express');
const router = express.Router();
const personalController = require('../controller/personal');

// Rutas para el controlador de Personal
router.get('/', personalController.mostrar);
router.get('/:id', personalController.obtenerPorId);
router.post('/', personalController.mandar);
router.put('/:id', personalController.actualizar);
router.delete('/:id', personalController.eliminar);

module.exports = router;
