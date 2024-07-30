// server/models/evento_participantes.js
module.exports = (sequelize, DataTypes) => {
    const EventoParticipantes = sequelize.define('EventoParticipantes', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      participante_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EventoParticipantes;
  };
  