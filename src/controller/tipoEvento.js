const tipoEventoCtl = {};
const { TipoEvento } = require('../Database/dataBase.sql');

// Mostrar todos los tipos de eventos
tipoEventoCtl.mostrar = async (req, res) => {
  try {
    const tiposEvento = await TipoEvento.findAll();
    res.status(200).json(tiposEvento);
  } catch (error) {
    console.error("Error al obtener los tipos de eventos:", error);
    res.status(500).send("Hubo un error al obtener los tipos de eventos");
  }
};

// Crear un nuevo tipo de evento
tipoEventoCtl.mandar = async (req, res) => {
  const { nombre } = req.body;

  try {
    await TipoEvento.create({ nombre });
    res.status(200).send("Tipo de evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el tipo de evento:", error);
    res.status(500).send("Hubo un error al crear el tipo de evento");
  }
};

// Obtener un tipo de evento por ID
tipoEventoCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const tipoEvento = await TipoEvento.findByPk(id);

    if (!tipoEvento) {
      return res.status(404).json({ message: 'Tipo de evento no encontrado' });
    }
    res.status(200).json(tipoEvento);
  } catch (error) {
    console.error("Error al obtener el tipo de evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un tipo de evento por ID
tipoEventoCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TipoEvento.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Tipo de evento eliminado con éxito");
    } else {
      res.status(404).send("Tipo de evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el tipo de evento:", error);
    res.status(500).send("Hubo un error al eliminar el tipo de evento");
  }
};

// Actualizar un tipo de evento por ID
tipoEventoCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const result = await TipoEvento.update(
      { nombre },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Tipo de evento actualizado con éxito");
    } else {
      res.status(404).send("Tipo de evento no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el tipo de evento:", error);
    res.status(500).send("Hubo un error al actualizar el tipo de evento");
  }
};

module.exports = tipoEventoCtl;
