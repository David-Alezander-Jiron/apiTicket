const detallesModelCtl = {};
const { DetallesModel } = require('../Database/dataBase.sql');

// Mostrar todos los detalles del modelo
detallesModelCtl.mostrar = async (req, res) => {
  try {
    const detalles = await DetallesModel.findAll();
    res.status(200).json(detalles);
  } catch (error) {
    console.error("Error al obtener los detalles:", error);
    res.status(500).send("Hubo un error al obtener los detalles");
  }
};

// Crear un nuevo detalle del modelo
detallesModelCtl.mandar = async (req, res) => {
  const { campo1, campo2, campo3 } = req.body; // Cambia los campos según tu modelo

  try {
    await DetallesModel.create({ campo1, campo2, campo3 });
    res.status(200).send("Detalle del modelo creado con éxito");
  } catch (error) {
    console.error("Error al crear el detalle del modelo:", error);
    res.status(500).send("Hubo un error al crear el detalle del modelo");
  }
};

// Obtener un detalle del modelo por ID
detallesModelCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const detalle = await DetallesModel.findByPk(id);

    if (!detalle) {
      return res.status(404).json({ message: 'Detalle del modelo no encontrado' });
    }
    res.status(200).json(detalle);
  } catch (error) {
    console.error("Error al obtener el detalle del modelo:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un detalle del modelo por ID
detallesModelCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await DetallesModel.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Detalle del modelo eliminado con éxito");
    } else {
      res.status(404).send("Detalle del modelo no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el detalle del modelo:", error);
    res.status(500).send("Hubo un error al eliminar el detalle del modelo");
  }
};

// Actualizar un detalle del modelo por ID
detallesModelCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { campo1, campo2, campo3 } = req.body; // Cambia los campos según tu modelo

  try {
    const result = await DetallesModel.update(
      { campo1, campo2, campo3 },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Detalle del modelo actualizado con éxito");
    } else {
      res.status(404).send("Detalle del modelo no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el detalle del modelo:", error);
    res.status(500).send("Hubo un error al actualizar el detalle del modelo");
  }
};

module.exports = detallesModelCtl;
