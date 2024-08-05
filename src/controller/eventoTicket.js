const eventoTicketCtl = {};
const { EventoTicket } = require('../Database/dataBase.sql');

// Mostrar todos los tickets del evento
eventoTicketCtl.mostrar = async (req, res) => {
  try {
    const tickets = await EventoTicket.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error al obtener los tickets del evento:", error);
    res.status(500).send("Hubo un error al obtener los tickets del evento");
  }
};

// Crear un nuevo ticket del evento
eventoTicketCtl.mandar = async (req, res) => {
  const { evento_id, ticket_id } = req.body;

  try {
    await EventoTicket.create({ evento_id, ticket_id });
    res.status(200).send("Ticket del evento creado con éxito");
  } catch (error) {
    console.error("Error al crear el ticket del evento:", error);
    res.status(500).send("Hubo un error al crear el ticket del evento");
  }
};

// Obtener un ticket del evento por ID
eventoTicketCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await EventoTicket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket del evento no encontrado' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al obtener el ticket del evento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

// Eliminar un ticket del evento por ID
eventoTicketCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await EventoTicket.destroy({ where: { id } });

    if (result) {
      res.status(200).send("Ticket del evento eliminado con éxito");
    } else {
      res.status(404).send("Ticket del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el ticket del evento:", error);
    res.status(500).send("Hubo un error al eliminar el ticket del evento");
  }
};

// Actualizar un ticket del evento por ID
eventoTicketCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { evento_id, ticket_id } = req.body;

  try {
    const result = await EventoTicket.update(
      { evento_id, ticket_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Ticket del evento actualizado con éxito");
    } else {
      res.status(404).send("Ticket del evento no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el ticket del evento:", error);
    res.status(500).send("Hubo un error al actualizar el ticket del evento");
  }
};

module.exports = eventoTicketCtl;
