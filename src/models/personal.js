const personal = (sequelize, type) => {
  return sequelize.define('Personal', {
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
      },usuario_id: {
        type: type.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        comment: 'ID del usuario relacionado'
    }
  }, {
      timestamps: false,
      comment: 'Tabla de personal'
  });
};

module.exports = personal;
