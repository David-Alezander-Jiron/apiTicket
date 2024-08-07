const evento_locaciones = (sequelize, type) => {
  return sequelize.define('evento_locaciones', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-locación'
      },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
      evento_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del evento'
      },
      locacion_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID de la locación'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de eventos y locaciones'
  });
};

module.exports = evento_locaciones;
