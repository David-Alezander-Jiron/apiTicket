const participantesCtl = {};
const { Participantes } = require('../Database/dataBase.sql');

// Mostrar todos los participantes
participantesCtl.mostrar = async (req, res) => {
  try {
    const participantes = await Participantes.findAll();
    res.status(200).json(participantes);
  } catch (error) {
    console.error("Error al obtener los participantes:", error);
    res.status(500).send("Hubo un error al obtener los participantes");
  }
};

// Crear un nuevo participante
participantesCtl.mandar = async (req, res) => {
  const { nombre, email } = req.body;

  try {
    await Participantes.create({ nombre, email });
    res.status(200).send("Participante creado con éxito");
  } catch (error) {
    console.error("Error al crear el participante:", error);
    res.status(500).send("Hubo un error al crear el participante");
  }
};

// Obtener un participante por ID
participantesCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const participante = await Participantes.findByPk(id);

    if (!participante) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    res.status(200).json(participante);
  } catch (error) {
    console.error("Error al obtener el participante:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un participante por ID
participantesCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Participantes.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Participante eliminado con éxito");
    } else {
      res.status(404).send("Participante no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el participante:", error);
    res.status(500).send("Hubo un error al eliminar el participante");
  }
};

// Actualizar un participante por ID
participantesCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  try {
    const result = await Participantes.update(
      { nombre, email },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Participante actualizado con éxito");
    } else {
      res.status(404).send("Participante no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el participante:", error);
    res.status(500).send("Hubo un error al actualizar el participante");
  }
};

module.exports = participantesCtl;
