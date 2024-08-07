const usuarios_roles = (sequelize, type) => {
    return sequelize.define('usuarios_roles', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del usuario'
        },
        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
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
  
  module.exports = usuarios_roles;
  
