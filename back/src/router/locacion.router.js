const express = require('express');
const router = express.Router();
const locacionCtl = require('../controllers/locacionCtl');

// Mostrar todas las locaciones
router.get('/', locacionCtl.mostrar);

// Crear una nueva locación
router.post('/', locacionCtl.mandar);

// Obtener una locación por ID
router.get('/:id', locacionCtl.obtenerPorId);

// Eliminar una locación por ID
router.delete('/:id', locacionCtl.eliminar);

// Actualizar una locación por ID
router.put('/:id', locacionCtl.actualizar);

module.exports = router;
