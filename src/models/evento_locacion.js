// server/models/evento_locacion.js
module.exports = (sequelize, DataTypes) => {
    const EventoLocacion = sequelize.define('EventoLocacion', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      locacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EventoLocacion;
  };
  