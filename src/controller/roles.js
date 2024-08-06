const rolesCtl = {};
const { Roles } = require('../Database/dataBase.sql');

// Mostrar todos los roles
rolesCtl.mostrar = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error al obtener los roles:", error);
    res.status(500).send("Hubo un error al obtener los roles");
  }
};

// Crear un nuevo rol
rolesCtl.mandar = async (req, res) => {
  const { nombre } = req.body;

  try {
    await Roles.create({ nombre });
    res.status(200).send("Rol creado con éxito");
  } catch (error) {
    console.error("Error al crear el rol:", error);
    res.status(500).send("Hubo un error al crear el rol");
  }
};

// Obtener un rol por ID
rolesCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const rol = await Roles.findByPk(id);

    if (!rol) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    res.status(200).json(rol);
  } catch (error) {
    console.error("Error al obtener el rol:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un rol por ID
rolesCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Roles.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Rol eliminado con éxito");
    } else {
      res.status(404).send("Rol no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el rol:", error);
    res.status(500).send("Hubo un error al eliminar el rol");
  }
};

// Actualizar un rol por ID
rolesCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const result = await Roles.update(
      { nombre },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Rol actualizado con éxito");
    } else {
      res.status(404).send("Rol no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el rol:", error);
    res.status(500).send("Hubo un error al actualizar el rol");
  }
};

module.exports = rolesCtl;
