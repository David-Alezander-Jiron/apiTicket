const usuario = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo único de usuario'
        },
        nombre: {
            type: type.STRING,
            comment: 'Nombre del usuario'
        },
        apellido: {
            type: type.STRING,
            comment: 'Nombre del usuario'
        },
        correo: {
            type: type.STRING,
            comment: 'Correo electrónico del usuario'
        },
    
        contrasena: {
            type: type.STRING,
            comment: 'Contraseña del usuario en formato hash'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del usuario'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del usuario'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del usuario'
        }
    }, {
        timestamps: false,
        comment: 'Tabla de usuarios',
        indexes: [
            {
                unique: true,
                fields: ['correo']
            },
            
        ]
    });
}

module.exports = usuario;