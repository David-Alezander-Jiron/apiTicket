const { eventos } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta

// Controlador de eventos
const eventosCtl = {};

// Crear un nuevo evento
eventosCtl.crearEvento = async (req, res, next) => {
  const { nombre, fecha, capacidad_personas, ubicacion, descripcion, tipo_evento, patrocinador_id, estado } = req.body;

  try {
    // Verificar si el evento ya existe
    const existingEvent = await eventos.findOne({ where: { nombre } });
    if (existingEvent) {
      return res.status(400).json({ message: 'El evento ya está registrado.' });
    }

    // Validar que el estado es un valor ENUM válido
    const validStates = ['activo', 'inactivo', 'eliminado'];
    if (!validStates.includes(estado)) {
      return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
    }

    // Crear un nuevo evento
    const newEvent = await eventos.create({
      nombre,
      fecha,
      capacidad_personas,
      ubicacion,
      descripcion,
      tipo_evento,
      patrocinador_id,
      estado
    });

    // Responder con el nuevo evento
    res.status(201).json({ message: 'Evento creado con éxito', event: newEvent });

  } catch (error) {
    console.error('Error en la creación del evento:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los eventos
eventosCtl.getEventos = async (req, res) => {
  try {
    // Filtrar para obtener solo los eventos que no están eliminados
    const eventosList = await eventos.findAll({
      where: { estado: 'activo' }
    });
    res.status(200).json(eventosList);
  } catch (error) {
    console.error('Error al obtener los eventos:', error.message);
    res.status(500).json({ error: 'Error al obtener los eventos', details: error.message });
  }
};

// Obtener un evento por ID
eventosCtl.getEventoById = async (req, res) => {
  try {
    const event = await eventos.findByPk(req.params.id);
    if (event && event.estado === 'activo') {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el evento:', error.message);
    res.status(500).json({ error: 'Error al obtener el evento', details: error.message });
  }
};

// Actualizar un evento por ID
eventosCtl.updateEvento = async (req, res) => {
  const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

  try {
    const event = await eventos.findByPk(req.params.id);
    if (event) {
      // Validar que el estado es un valor ENUM válido si está presente
      if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
        return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
      }
      await event.update(req.body);
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el evento:', error.message);
    res.status(500).json({ error: 'Error al actualizar el evento', details: error.message });
  }
};

// Borrar un evento por ID (Marcar como eliminado)
eventosCtl.deleteEvento = async (req, res) => {
  try {
    const event = await eventos.findByPk(req.params.id);
    if (event && event.estado === 'activo') {
      // Marcar el evento como eliminado
      await event.update({ estado: 'eliminado' });
      res.status(204).send();
    } else if (event && event.estado === 'eliminado') {
      res.status(404).json({ error: 'Evento ya ha sido eliminado' });
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error('Error al borrar el evento:', error.message);
    res.status(500).json({ error: 'Error al borrar el evento', details: error.message });
  }
};  

module.exports = eventosCtl;
