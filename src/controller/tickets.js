const ticketsCtl = {};
const { Tickets } = require('../Database/dataBase.sql');

// Mostrar todos los tickets
ticketsCtl.mostrar = async (req, res) => {
  try {
    const tickets = await Tickets.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error al obtener los tickets:", error);
    res.status(500).send("Hubo un error al obtener los tickets");
  }
};

// Crear un nuevo ticket
ticketsCtl.mandar = async (req, res) => {
  const { nombre, precio, evento_id } = req.body;

  try {
    await Tickets.create({ nombre, precio, evento_id });
    res.status(200).send("Ticket creado con éxito");
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    res.status(500).send("Hubo un error al crear el ticket");
  }
};

// Obtener un ticket por ID
ticketsCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Tickets.findByPk(id);

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
    const result = await Tickets.destroy({ where: { id } });

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
  const { nombre, precio, evento_id } = req.body;

  try {
    const result = await Tickets.update(
      { nombre, precio, evento_id },
      { where: { id } }
    );

    if (result[0] > 0) {
      res.status(200).send("Ticket actualizado con éxito");
    } else {
      res.status(404).send("Ticket no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el ticket:", error);
    res.status(500).send("Hubo un error al actualizar el ticket");
  }
};

module.exports = ticketsCtl;
