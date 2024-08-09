const ubi_personals = (sequelize, type) => {
  return sequelize.define('ubi_personals', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la ubicación del personal'
      },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
      servicio_id: {
        type: type.INTEGER,
        allowNull: false,
        references: {
            model: 'servicios',
            key: 'id'
        },
        comment: 'ID del servicio relacionado'
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

module.exports = ubi_personals;
