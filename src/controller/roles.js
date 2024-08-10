const { roles } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta

// Controlador de roles
const rolesCtl = {};

// Crear un nuevo rol
rolesCtl.crearRol = async (req, res, next) => {
    const { nombre, estado, descripcion } = req.body;

    try {
        // Verificar si el rol ya existe
        const existingRole = await roles.findOne({ where: { nombre } });
        if (existingRole) {
            return res.status(400).json({ message: 'El rol ya está registrado.' });
        }

        // Validar que el estado es un valor ENUM válido
        const validStates = ['activo', 'inactivo', 'eliminado'];
        if (!validStates.includes(estado)) {
            return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
        }

        // Crear un nuevo rol
        const newRole = await roles.create({
            nombre,
            estado,
            descripcion
        });

        // Responder con el nuevo rol
        res.status(201).json({ message: 'Rol creado con éxito', role: newRole });

    } catch (error) {
        console.error('Error en la creación del rol:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener todos los roles
rolesCtl.getRoles = async (req, res) => {
    try {
        // Filtrar para obtener solo los roles que no están eliminados
        const rolesList = await roles.findAll({
            where: { estado: 'activo' }
        });
        res.status(200).json(rolesList);
    } catch (error) {
        console.error('Error al obtener los roles:', error.message);
        res.status(500).json({ error: 'Error al obtener los roles', details: error.message });
    }
};

// Obtener un rol por ID
rolesCtl.getRolById = async (req, res) => {
    try {
        const role = await roles.findByPk(req.params.id);
        if (role && role.estado === 'activo') {
            res.status(200).json(role);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el rol:', error.message);
        res.status(500).json({ error: 'Error al obtener el rol', details: error.message });
    }
};

// Actualizar un rol por ID
rolesCtl.updateRol = async (req, res) => {
    const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

    try {
        const role = await roles.findByPk(req.params.id);
        if (role) {
            // Validar que el estado es un valor ENUM válido si está presente
            if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
                return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
            }
            await role.update(req.body);
            res.status(200).json(role);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el rol:', error.message);
        res.status(500).json({ error: 'Error al actualizar el rol', details: error.message });
    }
};

// Borrar un rol por ID (Marcar como eliminado)
rolesCtl.deleteRol = async (req, res) => {
    try {
        const role = await roles.findByPk(req.params.id);
        if (role && role.estado === 'activo') {
            // Marcar el rol como eliminado
            await role.update({ estado: 'eliminado' });
            res.status(204).send();
        } else if (role && role.estado === 'eliminado') {
            res.status(404).json({ error: 'Rol ya ha sido eliminado' });
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        console.error('Error al borrar el rol:', error.message);
        res.status(500).json({ error: 'Error al borrar el rol', details: error.message });
    }
};

module.exports = rolesCtl;
