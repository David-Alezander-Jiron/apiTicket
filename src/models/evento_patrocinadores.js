const eventoPatrocinadores = (sequelize, type) => {
  return sequelize.define('EventoPatrocinadores', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-patrocinador'
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

module.exports = eventoPatrocinadores;
