const ubiPersonal = (sequelize, type) => {
  return sequelize.define('UbiPersonal', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la ubicación del personal'
      },
      locacion_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID de la locación'
      },
      personal_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del personal'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de ubicación del personal'
  });
};

module.exports = ubiPersonal;
