const express = require('express');
const router = express.Router();
const paginaCtl = require('../controller/pagina');

// Mostrar todas las páginas
router.get('/', paginaCtl.mostrar);

// Crear una nueva página
router.post('/', paginaCtl.mandar);

// Obtener una página por ID
router.get('/:id', paginaCtl.obtenerPorId);

// Eliminar una página por ID
router.delete('/:id', paginaCtl.eliminar);

// Actualizar una página por ID
router.put('/:id', paginaCtl.actualizar);

module.exports = router;
