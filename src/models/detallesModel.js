const detalles = (sequelize, type) => {
  return sequelize.define('Detalles', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del detalle'
      },
      ubicacion: {
          type: type.STRING(100),
          allowNull: false,
          comment: 'Ubicación del detalle'
      },
      descripcion: {
          type: type.TEXT,
          comment: 'Descripción del detalle'
      },
      evento_id: {
          type: type.INTEGER,
          allowNull: false,
          comment: 'ID del evento asociado'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de detalles'
  });
};

module.exports = detalles;
