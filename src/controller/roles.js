const { roles } = require('../Database/dataBase.orm'); // Ajusta la ruta según sea necesario

const rolCtl = {};

// Mostrar todos los roles
rolCtl.mostrar = async (req, res) => {
  try {
    const listaRoles = await roles.findAll();
    res.status(200).json(listaRoles);
  } catch (error) {
    console.error("Error al obtener los roles:", error);
    res.status(500).send("Hubo un error al obtener los roles");
  }
};

// Crear un nuevo rol
rolCtl.mandar = async (req, res) => {
  const { nombre, estado, descripcion } = req.body;

  try {
    await roles.create({ nombre, estado, descripcion });
    res.status(200).send("Rol creado con éxito");
  } catch (error) {
    console.error("Error al crear el rol:", error);
    res.status(500).send("Hubo un error al crear el rol");
  }
};

// Obtener un rol por ID
rolCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  console.log("ID recibido:", id); // Añadir este log para verificar el ID recibido

  try {
    const rol = await roles.findByPk(id);

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
rolCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await roles.destroy({ where: { id } });

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
rolCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, estado, descripcion } = req.body;

  try {
    const result = await roles.update(
      { nombre, estado, descripcion },
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

module.exports = rolCtl;

