const eventos_personals = (sequelize, type) => {
  return sequelize.define('eventos_personals', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la relación evento-personal'
      },
      evento_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del evento'
      },
      personal_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del personal'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de eventos y personal'
  });
};

module.exports = eventos_personals;
