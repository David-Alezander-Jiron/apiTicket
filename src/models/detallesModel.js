// server/models/detalles.js
module.exports = (sequelize, DataTypes) => {
    const detalles = sequelize.define('Detalles', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return detalles;
  };
  