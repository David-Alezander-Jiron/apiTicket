// server/models/tickets.js
module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      codigo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING(20)
      },
      participante_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Tickets;
  };
  