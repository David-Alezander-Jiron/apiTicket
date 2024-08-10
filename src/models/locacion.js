const locaciones = (sequelize, type) => {
  return sequelize.define('locaciones', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID de la locación'
    },
    nombre: {
      type: type.STRING(100),
      allowNull: false,
      comment: 'Nombre de la locación'
    },
    direccion: {
      type: type.STRING(100),
      comment: 'Dirección de la locación'
    },
    capacidad: {
      type: type.INTEGER,
      comment: 'Capacidad de la locación'
    },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
  }, {
    timestamps: false,
    comment: 'Tabla de locaciones'
  });
};

module.exports = locaciones;
