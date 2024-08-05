const paginaCtl = {};
const { Pagina } = require('../Database/dataBase.sql');

// Mostrar todas las páginas
paginaCtl.mostrar = async (req, res) => {
  try {
    const paginas = await Pagina.findAll();
    res.status(200).json(paginas);
  } catch (error) {
    console.error("Error al obtener las páginas:", error);
    res.status(500).send("Hubo un error al obtener las páginas");
  }
};

// Crear una nueva página
paginaCtl.mandar = async (req, res) => {
  const { titulo, contenido } = req.body;

  try {
    await Pagina.create({ titulo, contenido });
    res.status(200).send("Página creada con éxito");
  } catch (error) {
    console.error("Error al crear la página:", error);
    res.status(500).send("Hubo un error al crear la página");
  }
};

// Obtener una página por ID
paginaCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const pagina = await Pagina.findByPk(id);

    if (!pagina) {
      return res.status(404).json({ message: 'Página no encontrada' });
    }
    res.status(200).json(pagina);
  } catch (error) {
    console.error("Error al obtener la página:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar una página por ID
paginaCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Pagina.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Página eliminada con éxito");
    } else {
      res.status(404).send("Página no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar la página:", error);
    res.status(500).send("Hubo un error al eliminar la página");
  }
};

// Actualizar una página por ID
paginaCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido } = req.body;

  try {
    const result = await Pagina.update(
      { titulo, contenido },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Página actualizada con éxito");
    } else {
      res.status(404).send("Página no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar la página:", error);
    res.status(500).send("Hubo un error al actualizar la página");
  }
};

module.exports = paginaCtl;
