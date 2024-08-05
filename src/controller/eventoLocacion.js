const eventoLocacionCtl = {};
const { EventoLocacion } = require('../Database/dataBase.sql');

// Mostrar todas las locaciones de eventos
eventoLocacionCtl.mostrar = async (req, res) => {
  try {
    const locaciones = await EventoLocacion.findAll();
    res.status(200).json(locaciones);
  } catch (error) {
    console.error("Error al obtener las locaciones de eventos:", error);
    res.status(500).send("Hubo un error al obtener las locaciones de eventos");
  }
};

// Crear una nueva locación de evento
eventoLocacionCtl.mandar = async (req, res) => {
  const { evento_id, locacion_id } = req.body;

  try {
    await EventoLocacion.create({ evento_id, locacion_id });
    res.status(200).send("Locación de evento creada con éxito");
  } catch (error) {
    console.error("Error al crear la locación de evento:", error);
    res.status(500).send("Hubo un error al crear la locación de evento");
  }
};

// Obtener una locación de evento por ID
eventoLocacionCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const locacion = await EventoLocacion.findByPk(id);

    if (!locacion) {
      return res.status(404).json({ message: 'Locación de evento no encontrada' });
    }
    res.status(200).json(locacion);
  } catch (error) {
    console.error("Error al obtener la locación de evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar una locación de evento por ID
eventoLocacionCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await EventoLocacion.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Locación de evento eliminada con éxito");
    } else {
      res.status(404).send("Locación de evento no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar la locación de evento:", error);
    res.status(500).send("Hubo un error al eliminar la locación de evento");
  }
};

// Actualizar una locación de evento por ID
eventoLocacionCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { evento_id, locacion_id } = req.body;

  try {
    const result = await EventoLocacion.update(
      { evento_id, locacion_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Locación de evento actualizada con éxito");
    } else {
      res.status(404).send("Locación de evento no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar la locación de evento:", error);
    res.status(500).send("Hubo un error al actualizar la locación de evento");
  }
};

module.exports = eventoLocacionCtl;
