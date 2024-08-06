const tipoEvento = (sequelize, type) => {
    return sequelize.define('TipoEvento', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del tipo de evento'
        },
        tipo_id: {
          type: type.INTEGER,
          allowNull: false,
          references: {
              model: 'tipo',
              key: 'id'
          },
          comment: 'ID del tipo relacionado'
      },
      evento_id: {
        type: type.INTEGER,
        allowNull: false,
        references: {
            model: 'evento',
            key: 'id'
        },
        comment: 'ID del evento relacionado'
    },
       
        
    }, {
        timestamps: false,
        comment: 'Tabla de tipos de eventos'
    });
  };
  
  module.exports = tipoEvento;
  