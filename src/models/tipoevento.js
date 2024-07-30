// server/models/tipoevento.js
module.exports = (sequelize, DataTypes) => {
    const TipoEvento = sequelize.define('TipoEvento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    });
    return TipoEvento;
  };
  