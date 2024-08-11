const ticketsCtl = {};
const { tickets } = require('../Database/dataBase.orm');  // Asegúrate de que esta ruta sea correcta

// Mostrar todos los tickets
ticketsCtl.mostrar = async (req, res) => {
  try {
    const allTickets = await tickets.findAll();  // Renombrado para evitar conflicto de nombres
    res.status(200).json(allTickets);
  } catch (error) {
    console.error("Error al obtener los tickets:", error);
    res.status(500).send("Hubo un error al obtener los tickets");
  }
};

// Crear un nuevo ticket
ticketsCtl.mandar = async (req, res) => {
  const { codigo, precio, estado, participante_id } = req.body;

  if (!codigo || !precio || !participante_id) {
    return res.status(400).send("Faltan datos requeridos: codigo, precio, o participante_id");
  }

  try {
    const nuevoTicket = await tickets.create({ codigo, precio, estado, participante_id });
    res.status(200).json(nuevoTicket);
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    res.status(500).send("Hubo un error al crear el ticket");
  }
};

// Obtener un ticket por ID
ticketsCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await tickets.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket no encontrado' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al obtener el ticket:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un ticket por ID
ticketsCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await tickets.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Ticket eliminado con éxito");
    } else {
      res.status(404).send("Ticket no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el ticket:", error);
    res.status(500).send("Hubo un error al eliminar el ticket");
  }
};

// Actualizar un ticket por ID
ticketsCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { codigo, precio, estado, participante_id } = req.body;

  try {
    const [updated] = await tickets.update(
      { codigo, precio, estado, participante_id },
      { where: { id } }
    );

    if (updated) {
      const updatedTicket = await tickets.findByPk(id);
      res.status(200).json(updatedTicket);
    } else {
      res.status(404).send("Ticket no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el ticket:", error);
    res.status(500).send("Hubo un error al actualizar el ticket");
  }
};

module.exports = ticketsCtl;
