// server/models/evento_patrocinadores.js
module.exports = (sequelize, DataTypes) => {
    const EventoPatrocinadores = sequelize.define('EventoPatrocinadores', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      patrocinador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EventoPatrocinadores;
  };
  