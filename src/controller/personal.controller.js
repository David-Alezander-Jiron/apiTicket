const { Personal } = require('../models/personal'); 

const personalController = {};

// Mostrar todos los registros
personalController.mostrarTodos = async (req, res) => {
    try {
        const personal = await Personal.findAll();
        res.json(personal);
    } catch (error) {
        console.error('Error al obtener el personal:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Mostrar un registro por ID
personalController.mostrarPorId = async (req, res) => {
    try {
        const personal = await Personal.findByPk(req.params.id);
        if (!personal) {
            return res.status(404).send('Personal no encontrado');
        }
        res.json(personal);
    } catch (error) {
        console.error('Error al obtener el personal:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Crear un nuevo registro
personalController.crear = async (req, res) => {
    try {
        const { nombre, apellido, rol, telefono } = req.body;
        const nuevoPersonal = await Personal.create({ nombre, apellido, rol, telefono });
        res.status(201).json(nuevoPersonal);
    } catch (error) {
        console.error('Error al crear el personal:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Editar un registro por ID
personalController.editar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, rol, telefono } = req.body;

        const personal = await Personal.findByPk(id);
        if (!personal) {
            return res.status(404).send('Personal no encontrado');
        }

        personal.nombre = nombre;
        personal.apellido = apellido;
        personal.rol = rol;
        personal.telefono = telefono;

        await personal.save();
        res.json(personal);
    } catch (error) {
        console.error('Error al actualizar el personal:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Eliminar un registro por ID
personalController.eliminar = async (req, res) => {
    try {
        const { id } = req.params;

        const personal = await Personal.findByPk(id);
        if (!personal) {
            return res.status(404).send('Personal no encontrado');
        }

        await personal.destroy();
        res.status(204).send(); // No Content
    } catch (error) {
        console.error('Error al eliminar el personal:', error);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports = personalController;
