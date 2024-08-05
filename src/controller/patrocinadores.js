const patrocinadoresCtl = {};
const { Patrocinadores } = require('../Database/connection');

// Mostrar todos los patrocinadores
patrocinadoresCtl.mostrar = async (req, res) => {
  try {
    const patrocinadores = await Patrocinadores.findAll();
    res.status(200).json(patrocinadores);
  } catch (error) {
    console.error("Error al obtener los patrocinadores:", error);
    res.status(500).send("Hubo un error al obtener los patrocinadores");
  }
};

// Crear un nuevo patrocinador
patrocinadoresCtl.mandar = async (req, res) => {
  const { nombre, email } = req.body;

  try {
    await Patrocinadores.create({ nombre, email });
    res.status(200).send("Patrocinador creado con éxito");
  } catch (error) {
    console.error("Error al crear el patrocinador:", error);
    res.status(500).send("Hubo un error al crear el patrocinador");
  }
};

// Obtener un patrocinador por ID
patrocinadoresCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const patrocinador = await Patrocinadores.findByPk(id);

    if (!patrocinador) {
      return res.status(404).json({ message: 'Patrocinador no encontrado' });
    }
    res.status(200).json(patrocinador);
  } catch (error) {
    console.error("Error al obtener el patrocinador:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un patrocinador por ID
patrocinadoresCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Patrocinadores.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Patrocinador eliminado con éxito");
    } else {
      res.status(404).send("Patrocinador no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el patrocinador:", error);
    res.status(500).send("Hubo un error al eliminar el patrocinador");
  }
};

// Actualizar un patrocinador por ID
patrocinadoresCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  try {
    const result = await Patrocinadores.update(
      { nombre, email },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Patrocinador actualizado con éxito");
    } else {
      res.status(404).send("Patrocinador no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el patrocinador:", error);
    res.status(500).send("Hubo un error al actualizar el patrocinador");
  }
};

module.exports = patrocinadoresCtl;
