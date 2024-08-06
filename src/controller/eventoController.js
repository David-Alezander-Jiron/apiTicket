const { evento } = require('../Database/database.orm'); // Ajusta la ruta según sea necesario

const eventoCtl = {};

// Mostrar todos los eventos
eventoCtl.mostrar = async (req, res) => {
  try {
    const eventos = await evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    console.error("Error al obtener los eventos:", error);
    res.status(500).send("Hubo un error al obtener los eventos");
  }
};

// Crear un nuevo evento
eventoCtl.mandar = async (req, res) => {
  const { nombre, fecha, capacidad_personas, tipo_evento_id, organizador_id, ubicacion, descripcion } = req.body;

  try {
    await evento.create({ nombre, fecha, capacidad_personas, tipo_evento_id, organizador_id, ubicacion, descripcion });
    res.status(200).send("Evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el evento:", error);
    res.status(500).send("Hubo un error al crear el evento");
  }
};

// Obtener un evento por ID
eventoCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const evento = await evento.findByPk(id);

    if (!evento) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    console.error("Error al obtener el evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un evento por ID
eventoCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await evento.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Evento eliminado con éxito");
    } else {
      res.status(404).send("Evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el evento:", error);
    res.status(500).send("Hubo un error al eliminar el evento");
  }
};

   // Actualizar un evento por ID
   eventoCtl.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha, capacidad_personas, tipo_evento_id, organizador_id, ubicacion, descripcion } = req.body;

    try {
      const result = await evento.update(
        { nombre, fecha, capacidad_personas, tipo_evento_id, organizador_id, ubicacion, descripcion },
        { where: { id } }
      );

      if (result[0] > 0) {
        res.status(200).send("Evento actualizado con éxito");
      } else {
        res.status(404).send("Evento no encontrado");
      }
    } catch (error) {
      console.error("Error al actualizar el evento:", error);
      res.status(500).send("Hubo un error al actualizar el evento");
    }
  };

  module.exports = eventoCtl;
