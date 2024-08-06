const eventoParticipantesCtl = {};
const { EventoParticipantes } = require('../Database/dataBase.sql');

// Mostrar todos los participantes del evento
eventoParticipantesCtl.mostrar = async (req, res) => {
  try {
    const participantes = await EventoParticipantes.findAll();
    res.status(200).json(participantes);
  } catch (error) {
    console.error("Error al obtener los participantes del evento:", error);
    res.status(500).send("Hubo un error al obtener los participantes del evento");
  }
};

// Crear un nuevo participante del evento
eventoParticipantesCtl.mandar = async (req, res) => {
  const { evento_id, participante_id } = req.body;

  try {
    await EventoParticipantes.create({ evento_id, participante_id });
    res.status(200).send("Participante del evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el participante del evento:", error);
    res.status(500).send("Hubo un error al crear el participante del evento");
  }
};

// Obtener un participante del evento por ID
eventoParticipantesCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const participante = await EventoParticipantes.findByPk(id);

    if (!participante) {
      return res.status(404).json({ message: 'Participante del evento no encontrado' });
    }
    res.status(200).json(participante);
  } catch (error) {
    console.error("Error al obtener el participante del evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un participante del evento por ID
eventoParticipantesCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await EventoParticipantes.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Participante del evento eliminado con éxito");
    } else {
      res.status(404).send("Participante del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el participante del evento:", error);
    res.status(500).send("Hubo un error al eliminar el participante del evento");
  }
};

// Actualizar un participante del evento por ID
eventoParticipantesCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { evento_id, participante_id } = req.body;

  try {
    const result = await EventoParticipantes.update(
      { evento_id, participante_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Participante del evento actualizado con éxito");
    } else {
      res.status(404).send("Participante del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el participante del evento:", error);
    res.status(500).send("Hubo un error al actualizar el participante del evento");
  }
};

module.exports = eventoParticipantesCtl;
