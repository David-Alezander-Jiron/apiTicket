const eventoPatrocinadoresCtl = {};
const { EventoPatrocinadores } = require('../Database/dataBase.sql');

// Mostrar todos los patrocinadores del evento
eventoPatrocinadoresCtl.mostrar = async (req, res) => {
  try {
    const patrocinadores = await EventoPatrocinadores.findAll();
    res.status(200).json(patrocinadores);
  } catch (error) {
    console.error("Error al obtener los patrocinadores del evento:", error);
    res.status(500).send("Hubo un error al obtener los patrocinadores del evento");
  }
};

// Crear un nuevo patrocinador del evento
eventoPatrocinadoresCtl.mandar = async (req, res) => {
  const { evento_id, patrocinador_id } = req.body;

  try {
    await EventoPatrocinadores.create({ evento_id, patrocinador_id });
    res.status(200).send("Patrocinador del evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el patrocinador del evento:", error);
    res.status(500).send("Hubo un error al crear el patrocinador del evento");
  }
};

// Obtener un patrocinador del evento por ID
eventoPatrocinadoresCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const patrocinador = await EventoPatrocinadores.findByPk(id);

    if (!patrocinador) {
      return res.status(404).json({ message: 'Patrocinador del evento no encontrado' });
    }
    res.status(200).json(patrocinador);
  } catch (error) {
    console.error("Error al obtener el patrocinador del evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un patrocinador del evento por ID
eventoPatrocinadoresCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await EventoPatrocinadores.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Patrocinador del evento eliminado con éxito");
    } else {
      res.status(404).send("Patrocinador del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el patrocinador del evento:", error);
    res.status(500).send("Hubo un error al eliminar el patrocinador del evento");
  }
};

// Actualizar un patrocinador del evento por ID
eventoPatrocinadoresCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { evento_id, patrocinador_id } = req.body;

  try {
    const result = await EventoPatrocinadores.update(
      { evento_id, patrocinador_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Patrocinador del evento actualizado con éxito");
    } else {
      res.status(404).send("Patrocinador del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el patrocinador del evento:", error);
    res.status(500).send("Hubo un error al actualizar el patrocinador del evento");
  }
};

module.exports = eventoPatrocinadoresCtl;
