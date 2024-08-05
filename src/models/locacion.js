// models/locacion.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Locacion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID de la locación'
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'Nombre de la locación'
    },
    direccion: {
      type: DataTypes.STRING(100),
      comment: 'Dirección de la locación'
    },
    capacidad: {
      type: DataTypes.INTEGER,
      comment: 'Capacidad de la locación'
    }
  }, {
    timestamps: false,
    comment: 'Tabla de locaciones'
  });
};
