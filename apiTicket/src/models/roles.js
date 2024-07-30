// server/models/roles.js
module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT
      }
    });
    return Roles;
  };
  