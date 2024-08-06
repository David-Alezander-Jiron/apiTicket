const eventos_tickets = (sequelize, type) => {
  return sequelize.define('eventos_tickets', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-ticket'
      },
      evento_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del evento'
      },
      ticket_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del ticket'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de eventos y tickets'
  });
};

module.exports = eventos_tickets;
