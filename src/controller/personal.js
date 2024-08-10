// controller/personal.js
const personalCtl = {};
const { personals } = require('../Database/dataBase.orm'); // Asegúrate de que la importación sea correcta

// Mostrar todo el personal
personalCtl.mostrar = async (req, res) => {
  try {
    const listaPersonal = await personals.findAll();
    res.status(200).json(listaPersonal);
  } catch (error) {
    console.error("Error al obtener el personal:", error);
    res.status(500).send("Hubo un error al obtener el personal");
  }
};

// Crear un nuevo personal
personalCtl.mandar = async (req, res) => {
  const { nombre, apellido, telefono, rol } = req.body;

  try {
    if (!nombre || !apellido || !telefono || !rol) {
      return res.status(400).send("Faltan datos requeridos");
    }

    const nuevoPersonal = await personals.create({ nombre, apellido, telefono, rol });
    res.status(201).json(nuevoPersonal);
  } catch (error) {
    console.error("Error al crear el personal:", error);
    res.status(500).send("Hubo un error al crear el personal");
  }
};

// Obtener un personal por ID
personalCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const personalItem = await personals.findByPk(id);

    if (!personalItem) {
      return res.status(404).json({ message: 'Personal no encontrado' });
    }
    res.status(200).json(personalItem);
  } catch (error) {
    console.error("Error al obtener el personal:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un personal por ID
personalCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await personals.destroy({ where: { id } });

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
  const { nombre, apellido, telefono, rol } = req.body;

  try {
    const [updated] = await personals.update(
      { nombre, apellido, telefono, rol },
      { where: { id } }
    );

    if (updated) {
      const updatedPersonal = await personals.findByPk(id);
      res.status(200).json(updatedPersonal);
    } else {
      res.status(404).send("Personal no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el personal:", error);
    res.status(500).send("Hubo un error al actualizar el personal");
  }
};

module.exports = personalCtl;
