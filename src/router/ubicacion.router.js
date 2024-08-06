const express = require('express');
const router = express.Router();
const ubicacionCtl = require('../controller/ubiacion');

// Rutas para el manejo de ubicaciones
router.get('/', ubicacionCtl.mostrar); // Mostrar todas las ubicaciones
router.post('/', ubicacionCtl.mandar); // Crear una nueva ubicación
router.get('/:id', ubicacionCtl.obtenerPorId); // Obtener una ubicación por ID
router.delete('/:id', ubicacionCtl.eliminar); // Eliminar una ubicación por ID
router.put('/:id', ubicacionCtl.actualizar); // Actualizar una ubicación por ID

module.exports = router;