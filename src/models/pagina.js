const paginas = (sequelize, type) => {
  return sequelize.define('paginas', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID de la página'
      },
      nombre: {
          type: type.STRING(100),
          allowNull: false,
          comment: 'Nombre de la página'
      },
      descripcion: {
          type: type.TEXT,
          comment: 'Descripción de la página'
      },
      telefono: {
          type: type.STRING(20),
          comment: 'Teléfono de contacto'
      },
      horario: {
          type: type.STRING(50),
          comment: 'Horario de atención'
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
          comment: 'ID del evento asociado'
      },
  }, {
      timestamps: false,
      comment: 'Tabla de páginas'
  });
};

module.exports = paginas;
