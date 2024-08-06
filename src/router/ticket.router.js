const express = require('express');
const router = express.Router();
const ticketsCtl = require('../controller/tickets');

// Rutas para el manejo de tickets
router.get('/', ticketsCtl.mostrar); // Mostrar todos los tickets
router.post('/', ticketsCtl.mandar); // Crear un nuevo ticket
router.get('/:id', ticketsCtl.obtenerPorId); // Obtener un ticket por ID
router.delete('/:id', ticketsCtl.eliminar); // Eliminar un ticket por ID
router.put('/:id', ticketsCtl.actualizar); // Actualizar un ticket por ID

module.exports = router;
