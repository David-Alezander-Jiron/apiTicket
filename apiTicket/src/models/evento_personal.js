// server/models/evento_personal.js
module.exports = (sequelize, DataTypes) => {
    const EventoPersonal = sequelize.define('EventoPersonal', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      personal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EventoPersonal;
  };
  