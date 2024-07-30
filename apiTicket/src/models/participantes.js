// server/models/participantes.js
module.exports = (sequelize, DataTypes) => {
    const Participantes = sequelize.define('Participantes', {
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
      correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      telefono: {
        type: DataTypes.STRING(20)
      }
    });
    return Participantes;
  };
  