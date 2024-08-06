const tipoEvento = (sequelize, type) => {
  return sequelize.define('TipoEvento', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del tipo de evento'
      },
      nombre: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Nombre del tipo de evento'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de tipos de eventos'
  });
};

module.exports = tipoEvento;
