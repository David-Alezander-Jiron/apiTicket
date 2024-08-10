const eventos_patrocinadores = (sequelize, type) => {
  return sequelize.define('eventos_patrocinadores', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-patrocinador'
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
      patrocinador_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del patrocinador'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de eventos y patrocinadores'
  });
};

module.exports = eventos_patrocinadores;
