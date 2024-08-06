const tipo_eventos = (sequelize, type) => {
    return sequelize.define('tipo_eventos', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del tipo de evento'
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
  
