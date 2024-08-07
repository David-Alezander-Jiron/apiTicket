const servicios = (sequelize, type) => {
    return sequelize.define('servicios', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del tipo del servicio'
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
            comment: 'Nombre del servicio'
        },
        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
        
    }, {
        timestamps: false,
        comment: 'Tabla de servicios'
    });
  };
  
  module.exports = servicios;
  
