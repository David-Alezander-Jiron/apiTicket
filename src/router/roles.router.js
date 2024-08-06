const express = require('express');
const router = express.Router();
const rolesCtl = require('../controller/roles');

// Rutas para el manejo de roles
router.get('/', rolesCtl.mostrar); // Mostrar todos los roles
router.post('/', rolesCtl.mandar); // Crear un nuevo rol
router.get('/:id', rolesCtl.obtenerPorId); // Obtener un rol por ID
router.delete('/:id', rolesCtl.eliminar); // Eliminar un rol por ID
router.put('/:id', rolesCtl.actualizar); // Actualizar un rol por ID

module.exports = router;
