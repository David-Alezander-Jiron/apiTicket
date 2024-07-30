const express = require('express');
const router = express.Router();
const personalController =  require('../controller/personal.controller')

// Rutas para el controlador de Personal
router.get('/', personalController.mostrarTodos);
router.get('/:id', personalController.mostrarPorId);
router.post('/', personalController.crear);
router.put('/:id', personalController.editar);
router.delete('/:id', personalController.eliminar);

module.exports = router