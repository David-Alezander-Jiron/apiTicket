const user = (sequelize, type) => {
    return sequelize.define('users', {
        idUser: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del usuario'
        },
        photoUser: {
            type: type.STRING,
            comment: 'Foto del usuario'
        },
        completeNameUser: {
            type: type.STRING,
            comment: 'Nombre completo del usuario'
        },
        identificationCardUser: {
            type: type.STRING,
            comment: 'Cédula del usuario'
        },
        emailUser: {
            type: type.STRING,
            comment: 'Correo electrónico del usuario'
        },
        cellPhoneUser: {
            type: type.STRING,
            comment: 'Teléfono celular del usuario'
        },
        usernameUser: {
            type: type.STRING,
            comment: 'Nombre de usuario'
        },
        passwordUser: {
            type: type.STRING,
            comment: 'Contraseña del usuario'
        },
        rolUser: {
            type: type.STRING,
            comment: 'Rol del usuario'
        },
        stateUser: {
            type: type.STRING,
            comment: 'Estado del usuario'
        },
        createUser: {
            type: type.DATE,
            comment: 'Fecha de creación del usuario'
        },
        updateUser: {
            type: type.DATE,
            comment: 'Fecha de actualización del usuario'
        }
    }, {
        timestamps: false,
        comment: 'Tabla de usuarios'
    });
};

module.exports = user;
