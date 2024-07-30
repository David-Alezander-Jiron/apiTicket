// server/models/patrocinadores.js
module.exports = (sequelize, DataTypes) => {
    const Patrocinadores = sequelize.define('Patrocinadores', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT
      },
      contacto: {
        type: DataTypes.STRING(100)
      }
    });
    return Patrocinadores;
  };
  