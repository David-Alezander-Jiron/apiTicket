const usuarios = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del ticket'
        },
        nombres: {

            type: type.STRING(500),
            allowNull: true,
            comment: 'nombre del usuario '
        },
        apellidos: {

            type: type.STRING(500),
            allowNull: true,
            comment: 'apellido del usuario '
        },
        correo: {
            type: type.STRING(500),
             allowNull: true,
            comment: 'correo del usuario '
        },
        contrasena: {
            type: type.STRING(500),
             allowNull: true,
            comment: 'contrasena del usuario '
        },
        telefono: {
            type: type.STRING(500),
            allowNull: true,
            comment: 'telefono del usuario '
        },

        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        }
        
    }, {
        timestamps: false,
        comment: 'Tabla de usuarios',
        indexes: [
            {
                unique: true,
                fields: ['correo']
            }
        ]
    });
  };
  
  module.exports = usuarios;
  