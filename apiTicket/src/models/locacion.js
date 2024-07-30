// server/models/locacion.js
module.exports = (sequelize, DataTypes) => {
    const Locacion = sequelize.define('Locacion', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING(100)
      },
      capacidad: {
        type: DataTypes.INTEGER
      }
    });
    return Locacion;
  };
  