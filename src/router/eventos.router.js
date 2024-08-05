const express = require('express');
const router = express.Router();
const eventoCtl = require('../controller/eventoController');

// Mostrar todos los eventos
router.get('/', eventoCtl.mostrar);

// Crear un nuevo evento
router.post('/', eventoCtl.mandar);

// Obtener un evento por ID
router.get('/:id', eventoCtl.obtenerPorId);

// Eliminar un evento por ID
router.delete('/:id', eventoCtl.eliminar);

// Actualizar un evento por ID
router.put('/:id', eventoCtl.actualizar);

module.exports = router;
