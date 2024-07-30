// server/models/ubi_personal.js
module.exports = (sequelize, DataTypes) => {
    const UbiPersonal = sequelize.define('UbiPersonal', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      locacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      personal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return UbiPersonal;
  };
  