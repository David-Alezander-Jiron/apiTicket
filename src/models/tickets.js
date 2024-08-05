const tickets = (sequelize, type) => {
  return sequelize.define('Tickets', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del ticket'
      },
      codigo: {
          type: type.STRING(50),
          allowNull: false,
          unique: true,
          comment: 'Código del ticket'
      },
      precio: {
          type: type.DECIMAL(10, 2),
          allowNull: false,
          comment: 'Precio del ticket'
      },
      estado: {
          type: type.STRING(20),
          comment: 'Estado del ticket'
      },
      participante_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del participante asociado'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de tickets'
  });
};

module.exports = tickets;
