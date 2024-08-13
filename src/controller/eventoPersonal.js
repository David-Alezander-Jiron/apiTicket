const { eventos_personals } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta
const { Op } = require('sequelize'); // Importa Op de sequelize

// Controlador de eventos_personals
const eventosPersonalsCtl = {};

// Crear una nueva relación evento-personal
eventosPersonalsCtl.crearEventoPersonal = async (req, res, next) => {
    const { evento_id, personal_id, estado } = req.body;

    try {
        // Verificar si la relación evento-personal ya existe
        const existingEventoPersonal = await eventos_personals.findOne({ where: { evento_id, personal_id } });
        if (existingEventoPersonal) {
            return res.status(400).json({ message: 'La relación evento-personal ya está registrada.' });
        }

        // Validar que el estado es un valor ENUM válido
        const validStates = ['activo', 'inactivo', 'eliminado'];
        if (!validStates.includes(estado)) {
            return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
        }

        // Crear una nueva relación evento-personal
        const newEventoPersonal = await eventos_personals.create({
            evento_id,
            personal_id,
            estado
        });

        // Responder con la nueva relación evento-personal
        res.status(201).json({ message: 'Registro exitoso', eventoPersonal: newEventoPersonal });

    } catch (error) {
        console.error('Error en el registro de la relación evento-personal:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones evento-personal
eventosPersonalsCtl.getEventosPersonals = async (req, res) => {
    try {
        // Filtrar para obtener solo las relaciones evento-personal que no están eliminadas
        const eventosPersonalsList = await eventos_personals.findAll({
            where: { estado: { [Op.ne]: 'eliminado' } } // Op.ne significa "no igual"
        });
        res.status(200).json(eventosPersonalsList);
    } catch (error) {
        console.error('Error al obtener las relaciones evento-personal:', error.message);
        res.status(500).json({ error: 'Error al obtener las relaciones evento-personal', details: error.message });
    }
};

// Obtener una relación evento-personal por ID
eventosPersonalsCtl.getEventoPersonalById = async (req, res) => {
    try {
        const eventoPersonal = await eventos_personals.findByPk(req.params.id);
        if (eventoPersonal && eventoPersonal.estado !== 'eliminado') { // Cambiado a "no igual a 'eliminado'"
            res.status(200).json(eventoPersonal);
        } else {
            res.status(404).json({ error: 'Relación evento-personal no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la relación evento-personal:', error.message);
        res.status(500).json({ error: 'Error al obtener la relación evento-personal', details: error.message });
    }
};

// Actualizar una relación evento-personal por ID
eventosPersonalsCtl.updateEventoPersonal = async (req, res) => {
    const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

    try {
        const eventoPersonal = await eventos_personals.findByPk(req.params.id);
        if (eventoPersonal) {
            // Validar que el estado es un valor ENUM válido si está presente
            if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
                return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
            }
            await eventoPersonal.update(req.body);
            res.status(200).json(eventoPersonal);
        } else {
            res.status(404).json({ error: 'Relación evento-personal no encontrada' });
        }
    } catch (error) {
        console.error('Error al actualizar la relación evento-personal:', error.message);
        res.status(500).json({ error: 'Error al actualizar la relación evento-personal', details: error.message });
    }
};

// Borrar una relación evento-personal por ID (Marcar como eliminado)
eventosPersonalsCtl.deleteEventoPersonal = async (req, res) => {
    try {
        const eventoPersonal = await eventos_personals.findByPk(req.params.id);
        if (eventoPersonal && eventoPersonal.estado === 'activo') {
            // Marcar la relación evento-personal como eliminada
            await eventoPersonal.update({ estado: 'eliminado' });
            res.status(204).send();
        } else if (eventoPersonal && eventoPersonal.estado === 'eliminado') {
            res.status(404).json({ error: 'Relación evento-personal ya ha sido eliminada' });
        } else {
            res.status(404).json({ error: 'Relación evento-personal no encontrada' });
        }
    } catch (error) {
        console.error('Error al borrar la relación evento-personal:', error.message);
        res.status(500).json({ error: 'Error al borrar la relación evento-personal', details: error.message });
    }
};

// Exportar el controlador
module.exports = eventosPersonalsCtl;
