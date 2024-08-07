const tipo_eventos = (sequelize, type) => {
    return sequelize.define('tipo_eventos', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del tipo de evento'
          },
        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
          tipo_id: {
            type: type.INTEGER,
            allowNull: false,
            comment: 'ID del tipo relacionado'
          }
        }, {
          timestamps: false,
          comment: 'Tabla de tipos de eventos'
        });
    }
  
  module.exports = tipo_eventos;
  
