const express = require('express');
const router = express.Router();
const rolesCtl = require('../controller/roles');

// Rutas para el manejo de roles
router.get('/roles', rolesCtl.getRoles); // Mostrar todos los roles
router.post('/roles', rolesCtl.crearRol); // Crear un nuevo rol
router.get('/roles/:id', rolesCtl.getRolById); // Obtener un rol por ID
router.delete('/roles/:id', rolesCtl.deleteRol); // Eliminar un rol por ID
router.put('/roles/:id', rolesCtl.updateRol); // Actualizar un rol por ID

module.exports = router;
