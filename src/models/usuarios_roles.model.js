const tipo_eventos = (sequelize, type) => {
    return sequelize.define('tipo_eventos', {
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

      rol_id: {
        type: type.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        },
        comment: 'ID del rol relacionado'
    },
       
        
    }, {
        timestamps: false,
        comment: 'Tabla de tipos de eventos'
    });
  };
  
  module.exports = tipo_eventos;
  