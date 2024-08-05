const locacionCtl = {};
const { Locacion } = require('../Database/dataBase.sql');

// Mostrar todas las locaciones
locacionCtl.mostrar = async (req, res) => {
  try {
    const locaciones = await Locacion.findAll();
    res.status(200).json(locaciones);
  } catch (error) {
    console.error("Error al obtener las locaciones:", error);
    res.status(500).send("Hubo un error al obtener las locaciones");
  }
};

// Crear una nueva locación
locacionCtl.mandar = async (req, res) => {
  const { nombre, direccion, capacidad } = req.body;

  try {
    await Locacion.create({ nombre, direccion, capacidad });
    res.status(200).send("Locación creada con éxito");
  } catch (error) {
    console.error("Error al crear la locación:", error);
    res.status(500).send("Hubo un error al crear la locación");
  }
};

// Obtener una locación por ID
locacionCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const locacion = await Locacion.findByPk(id);

    if (!locacion) {
      return res.status(404).json({ message: 'Locación no encontrada' });
    }
    res.status(200).json(locacion);
  } catch (error) {
    console.error("Error al obtener la locación:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar una locación por ID
locacionCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Locacion.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Locación eliminada con éxito");
    } else {
      res.status(404).send("Locación no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar la locación:", error);
    res.status(500).send("Hubo un error al eliminar la locación");
  }
};

// Actualizar una locación por ID
locacionCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, capacidad } = req.body;

  try {
    const result = await Locacion.update(
      { nombre, direccion, capacidad },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Locación actualizada con éxito");
    } else {
      res.status(404).send("Locación no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar la locación:", error);
    res.status(500).send("Hubo un error al actualizar la locación");
  }
};

module.exports = locacionCtl;
