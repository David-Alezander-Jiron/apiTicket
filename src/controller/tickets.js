const { tickets } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta

// Controlador de tickets
const ticketsCtl = {};

// Crear un nuevo ticket
ticketsCtl.crearTicket = async (req, res, next) => {
  const { evento_id, codigoQr, precio, estado, participantes_id } = req.body;

  try {
    // Verificar si el ticket ya existe
    const existingTicket = await tickets.findOne({ where: { codigoQr } });
    if (existingTicket) {
      return res.status(400).json({ message: 'El ticket ya está registrado.' });
    }

    // Validar que el estado es un valor ENUM válido
    const validStates = ['activo', 'inactivo', 'eliminado'];
    if (!validStates.includes(estado)) {
      return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
    }

    // Crear un nuevo ticket
    const newTicket = await tickets.create({
      evento_id,
      codigoQr,
      precio,
      estado,
      participantes_id
    });

    // Responder con el nuevo ticket
    res.status(201).json({ message: 'Ticket creado con éxito', ticket: newTicket });

  } catch (error) {
    console.error('Error en la creación del ticket:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los tickets
ticketsCtl.getTickets = async (req, res) => {
  try {
    // Filtrar para obtener solo los tickets que no están eliminados
    const ticketsList = await tickets.findAll({
      where: { estado: 'activo' }
    });
    res.status(200).json(ticketsList);
  } catch (error) {
    console.error('Error al obtener los tickets:', error.message);
    res.status(500).json({ error: 'Error al obtener los tickets', details: error.message });
  }
};

// Obtener un ticket por ID
ticketsCtl.getTicketById = async (req, res) => {
  try {
    const ticket = await tickets.findByPk(req.params.id);
    if (ticket && ticket.estado === 'activo') {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ error: 'Ticket no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el ticket:', error.message);
    res.status(500).json({ error: 'Error al obtener el ticket', details: error.message });
  }
};

// Actualizar un ticket por ID
ticketsCtl.updateTicket = async (req, res) => {
  const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

  try {
    const ticket = await tickets.findByPk(req.params.id);
    if (ticket) {
      // Validar que el estado es un valor ENUM válido si está presente
      if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
        return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
      }
      await ticket.update(req.body);
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ error: 'Ticket no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el ticket:', error.message);
    res.status(500).json({ error: 'Error al actualizar el ticket', details: error.message });
  }
};

// Borrar un ticket por ID (Marcar como eliminado)
ticketsCtl.deleteTicket = async (req, res) => {
  try {
    const ticket = await tickets.findByPk(req.params.id);
    if (ticket && ticket.estado === 'activo') {
      // Marcar el ticket como eliminado
      await ticket.update({ estado: 'eliminado' });
      res.status(204).send();
    } else if (ticket && ticket.estado === 'eliminado') {
      res.status(404).json({ error: 'Ticket ya ha sido eliminado' });
    } else {
      res.status(404).json({ error: 'Ticket no encontrado' });
    }
  } catch (error) {
    console.error('Error al borrar el ticket:', error.message);
    res.status(500).json({ error: 'Error al borrar el ticket', details: error.message });
  }
};  

module.exports = ticketsCtl;
