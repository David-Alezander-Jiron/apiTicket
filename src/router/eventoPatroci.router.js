const express = require('express');
const router = express.Router();
const eventoPatrocinadoresCtl = require('../controller/eventoPatrocinadores');

// Mostrar todos los patrocinadores del evento
router.get('/', eventoPatrocinadoresCtl.mostrar);

// Crear un nuevo patrocinador del evento
router.post('/', eventoPatrocinadoresCtl.mandar);

// Obtener un patrocinador del evento por ID
router.get('/:id', eventoPatrocinadoresCtl.obtenerPorId);

// Eliminar un patrocinador del evento por ID
router.delete('/:id', eventoPatrocinadoresCtl.eliminar);

// Actualizar un patrocinador del evento por ID
router.put('/:id', eventoPatrocinadoresCtl.actualizar);

module.exports = router;
