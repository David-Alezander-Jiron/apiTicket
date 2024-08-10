const eventos_participantes = (sequelize, type) => {
  return sequelize.define('eventos_participantes', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-participante'
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
      participante_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del participante'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de eventos y participantes'
  });
};

module.exports = eventos_participantes;
