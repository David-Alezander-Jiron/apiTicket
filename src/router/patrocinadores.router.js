const express = require('express');
const router = express.Router();
const patrocinadoresCtl = require('../controller/patrocinadores'); // Asegúrate de que la ruta sea correcta

// Mostrar todos los patrocinadores
router.get('/patrocinadores', patrocinadoresCtl.getPatrocinadores);

// Crear un nuevo patrocinador
router.post('/patrocinadores', patrocinadoresCtl.crearPatrocinador);

// Obtener un patrocinador por ID
router.get('/patrocinadores/:id', patrocinadoresCtl.getPatrocinadorById);

// Eliminar un patrocinador por ID
router.delete('/patrocinadores/:id', patrocinadoresCtl.deletePatrocinador);

// Actualizar un patrocinador por ID
router.put('/patrocinadores/:id', patrocinadoresCtl.updatePatrocinador);

module.exports = router;
