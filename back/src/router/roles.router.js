const express = require('express');
const router = express.Router();
const rolesCtl = require('../controller/roles');

// Rutas para el manejo de roles
router.get('/roles', rolesCtl.mostrar); // Mostrar todos los roles
router.post('/roles', rolesCtl.mandar); // Crear un nuevo rol
router.get('/roles:id', rolesCtl.obtenerPorId); // Obtener un rol por ID
router.delete('/roles/:id', rolesCtl.eliminar); // Eliminar un rol por ID
router.put('/roles/:id', rolesCtl.actualizar); // Actualizar un rol por ID

module.exports = router;
