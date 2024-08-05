const patrocinadores = (sequelize, type) => {
  return sequelize.define('Patrocinadores', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del patrocinador'
      },
      nombre: {
          type: type.STRING(100),
          allowNull: false,
          comment: 'Nombre del patrocinador'
      },
      descripcion: {
          type: type.TEXT,
          comment: 'Descripción del patrocinador'
      },
      contacto: {
          type: type.STRING(100),
          comment: 'Información de contacto'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de patrocinadores'
  });
};

module.exports = patrocinadores;
