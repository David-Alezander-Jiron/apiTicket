// server/models/personal.js
module.exports = (sequelize, DataTypes) => {
    const Personal = sequelize.define('Personal', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      rol: {
        type: DataTypes.STRING(50)
      },
      telefono: {
        type: DataTypes.STRING(20)
      }
    });
    return Personal;
  };
  