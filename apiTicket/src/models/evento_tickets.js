// server/models/evento_tickets.js
module.exports = (sequelize, DataTypes) => {
    const EventoTickets = sequelize.define('EventoTickets', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ticket_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EventoTickets;
  };
  