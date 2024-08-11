const { participantes } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta

// Controlador de participantes
const participantesCtl = {};

// Crear un nuevo participante
participantesCtl.crearParticipante = async (req, res, next) => {
  const { nombre, correo, telefono, evento_id, estado } = req.body;

  try {
    // Verificar si el participante ya existe
    const existingParticipante = await participantes.findOne({ where: { correo } });
    if (existingParticipante) {
      return res.status(400).json({ message: 'El participante ya está registrado.' });
    }

    // Validar que el estado es un valor ENUM válido
    const validStates = ['activo', 'inactivo', 'eliminado'];
    if (!validStates.includes(estado)) {
      return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
    }

    // Crear un nuevo participante
    const newParticipante = await participantes.create({
      nombre,
      correo,
      telefono,
      evento_id,
      estado
    });

    // Responder con el nuevo participante
    res.status(201).json({ message: 'Participante creado con éxito', participante: newParticipante });

  } catch (error) {
    console.error('Error en la creación del participante:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los participantes
participantesCtl.getParticipantes = async (req, res) => {
  try {
    // Filtrar para obtener solo los participantes que no están eliminados
    const participantesList = await participantes.findAll({
      where: { estado: 'activo' }
    });
    res.status(200).json(participantesList);
  } catch (error) {
    console.error('Error al obtener los participantes:', error.message);
    res.status(500).json({ error: 'Error al obtener los participantes', details: error.message });
  }
};

// Obtener un participante por ID
participantesCtl.getParticipanteById = async (req, res) => {
  try {
    const participante = await participantes.findByPk(req.params.id);
    if (participante && participante.estado === 'activo') {
      res.status(200).json(participante);
    } else {
      res.status(404).json({ error: 'Participante no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el participante:', error.message);
    res.status(500).json({ error: 'Error al obtener el participante', details: error.message });
  }
};

// Actualizar un participante por ID
participantesCtl.updateParticipante = async (req, res) => {
  const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

  try {
    const participante = await participantes.findByPk(req.params.id);
    if (participante) {
      // Validar que el estado es un valor ENUM válido si está presente
      if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
        return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
      }
      await participante.update(req.body);
      res.status(200).json(participante);
    } else {
      res.status(404).json({ error: 'Participante no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el participante:', error.message);
    res.status(500).json({ error: 'Error al actualizar el participante', details: error.message });
  }
};

// Borrar un participante por ID (Marcar como eliminado)
participantesCtl.deleteParticipante = async (req, res) => {
  try {
    const participante = await participantes.findByPk(req.params.id);
    if (participante && participante.estado === 'activo') {
      // Marcar el participante como eliminado
      await participante.update({ estado: 'eliminado' });
      res.status(204).send();
    } else if (participante && participante.estado === 'eliminado') {
      res.status(404).json({ error: 'Participante ya ha sido eliminado' });
    } else {
      res.status(404).json({ error: 'Participante no encontrado' });
    }
  } catch (error) {
    console.error('Error al borrar el participante:', error.message);
    res.status(500).json({ error: 'Error al borrar el participante', details: error.message });
  }
};  

module.exports = participantesCtl;
