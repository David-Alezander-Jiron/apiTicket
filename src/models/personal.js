const personals = (sequelize, type) => {
  return sequelize.define('personals', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del personal'
      },
      nombre: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Nombre del personal'
      },
      apellido: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Apellido del personal'
      },
      rol: {
          type: type.STRING(50),
          comment: 'Rol del personal'
      },
      telefono: {
          type: type.STRING(20),
          comment: 'Teléfono del personal'
      },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },

  }, {
      timestamps: false,
      comment: 'Tabla de personal'
  });
};

module.exports = personals;
