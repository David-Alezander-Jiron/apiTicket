const tipos = (sequelize, type) => {
  return sequelize.define('tipos', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del tipo de evento'
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
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
      nombre: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Nombre del tipo de evento'
      },
      
  }, {
      timestamps: false,
      comment: 'Tabla de tipos de eventos'
  });
};

module.exports = tipos;
