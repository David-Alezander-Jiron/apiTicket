// controller/personal.js
const personalCtl = {};
const { Personal } = require('../Database/dataBase.sql');

// Mostrar todo el personal
personalCtl.mostrar = async (req, res) => {
  try {
    const personal = await Personal.findAll();
    res.status(200).json(personal);
  } catch (error) {
    console.error("Error al obtener el personal:", error);
    res.status(500).send("Hubo un error al obtener el personal");
  }
};

// Crear un nuevo personal
personalCtl.mandar = async (req, res) => {
  const { nombre, email } = req.body;

  try {
    await Personal.create({ nombre, email });
    res.status(200).send("Personal creado con éxito");
  } catch (error) {
    console.error("Error al crear el personal:", error);
    res.status(500).send("Hubo un error al crear el personal");
  }
};

// Obtener un personal por ID
personalCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const personal = await Personal.findByPk(id);

    if (!personal) {
      return res.status(404).json({ message: 'Personal no encontrado' });
    }
    res.status(200).json(personal);
  } catch (error) {
    console.error("Error al obtener el personal:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un personal por ID
personalCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Personal.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Personal eliminado con éxito");
    } else {
      res.status(404).send("Personal no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el personal:", error);
    res.status(500).send("Hubo un error al eliminar el personal");
  }
};

// Actualizar un personal por ID
personalCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  try {
    const result = await Personal.update(
      { nombre, email },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Personal actualizado con éxito");
    } else {
      res.status(404).send("Personal no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el personal:", error);
    res.status(500).send("Hubo un error al actualizar el personal");
  }
};

module.exports = personalCtl;
