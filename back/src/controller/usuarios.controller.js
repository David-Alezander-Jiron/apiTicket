const { usuarios } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta
const bcrypt = require('bcryptjs');

// Controlador de usuarios
const usersCtl = {};

// Crear un nuevo usuario
usersCtl.crearUsuario = async (req, res, next) => {
    const { nombres, apellidos, correo, contrasena, telefono, estado } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await usuarios.findOne({ where: { correo } });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        // Validar que el estado es un valor ENUM válido
        const validStates = ['activo', 'inactivo', 'eliminado'];
        if (!validStates.includes(estado)) {
            return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        // Crear un nuevo usuario
        const newUser = await usuarios.create({
            nombres,
            apellidos,
            correo,
            telefono,
            estado,
            contrasena: hashedPassword
        });

        // Responder con el nuevo usuario
        res.status(201).json({ message: 'Registro exitoso', user: newUser });

    } catch (error) {
        console.error('Error en el registro del usuario:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener todos los usuarios
usersCtl.getUsuarios = async (req, res) => {
    try {
        // Filtrar para obtener solo los usuarios que no están eliminados
        const usuariosList = await usuarios.findAll({
            where: { estado: 'activo' }
        });
        res.status(200).json(usuariosList);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        res.status(500).json({ error: 'Error al obtener los usuarios', details: error.message });
    }
};

// Obtener un usuario por ID
usersCtl.getUsuarioById = async (req, res) => {
    try {
        const user = await usuarios.findByPk(req.params.id);
        if (user && user.estado === 'activo') {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error.message);
        res.status(500).json({ error: 'Error al obtener el usuario', details: error.message });
    }
};

// Actualizar un usuario por ID
usersCtl.updateUsuario = async (req, res) => {
    const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

    try {
        const user = await usuarios.findByPk(req.params.id);
        if (user) {
            // Validar que el estado es un valor ENUM válido si está presente
            if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
                return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
            }
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el usuario:', error.message);
        res.status(500).json({ error: 'Error al actualizar el usuario', details: error.message });
    }
};

// Borrar un usuario por ID (Marcar como eliminado)
usersCtl.deleteUsuario = async (req, res) => {
    try {
        const user = await usuarios.findByPk(req.params.id);
        if (user && user.estado === 'activo') {
            // Marcar el usuario como eliminado
            await user.update({ estado: 'eliminado' });
            res.status(204).send();
        } else if (user && user.estado === 'eliminado') {
            res.status(404).json({ error: 'Usuario ya ha sido eliminado' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al borrar el usuario:', error.message);
        res.status(500).json({ error: 'Error al borrar el usuario', details: error.message });
    }
};

module.exports = usersCtl;
