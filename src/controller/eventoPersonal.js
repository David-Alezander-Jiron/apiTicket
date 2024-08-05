const eventoPersonalCtl = {};
const { EventoPersonal } = require('../Database/dataBase.sql');

// Mostrar todo el personal del evento
eventoPersonalCtl.mostrar = async (req, res) => {
  try {
    const personal = await EventoPersonal.findAll();
    res.status(200).json(personal);
  } catch (error) {
    console.error("Error al obtener el personal del evento:", error);
    res.status(500).send("Hubo un error al obtener el personal del evento");
  }
};

// Crear un nuevo personal del evento
eventoPersonalCtl.mandar = async (req, res) => {
  const { evento_id, personal_id } = req.body;

  try {
    await EventoPersonal.create({ evento_id, personal_id });
    res.status(200).send("Personal del evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el personal del evento:", error);
    res.status(500).send("Hubo un error al crear el personal del evento");
  }
};

// Obtener un personal del evento por ID
eventoPersonalCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const personal = await EventoPersonal.findByPk(id);

    if (!personal) {
      return res.status(404).json({ message: 'Personal del evento no encontrado' });
    }
    res.status(200).json(personal);
  } catch (error) {
    console.error("Error al obtener el personal del evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un personal del evento por ID
eventoPersonalCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await EventoPersonal.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Personal del evento eliminado con éxito");
    } else {
      res.status(404).send("Personal del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el personal del evento:", error);
    res.status(500).send("Hubo un error al eliminar el personal del evento");
  }
};

// Actualizar un personal del evento por ID
eventoPersonalCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { evento_id, personal_id } = req.body;

  try {
    const result = await EventoPersonal.update(
      { evento_id, personal_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Personal del evento actualizado con éxito");
    } else {
      res.status(404).send("Personal del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el personal del evento:", error);
    res.status(500).send("Hubo un error al actualizar el personal del evento");
  }
};

module.exports = eventoPersonalCtl;
