const roles = (sequelize, type) => {
  return sequelize.define('roles', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del rol'
      },
      usuario_id: {
        type: type.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        comment: 'ID del usuario relacionado'
    },
      nombre: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Nombre del rol'
      },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
      descripcion: {
          type: type.TEXT,
          comment: 'Descripción del rol'
      }
  }, {
      timestamps: false,
      comment: 'Tabla de roles'
  });
};

module.exports = roles;
