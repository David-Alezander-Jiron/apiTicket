const participant = (sequelize, type) => {
    return sequelize.define('participants', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del participante'
        },
        nombre: {
            type: type.STRING,
            comment: 'Nombre del participante'
        },
        apellido: {
            type: type.STRING,
            comment: 'Apellido del participante'
        },
        correo: {
            type: type.STRING,
            comment: 'Correo electrónico del participante'
        },
        telefono: {
            type: type.STRING,
            comment: 'Teléfono del participante'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del participante'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del participante'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del participante'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de participantes'
    });
};

module.exports = participant;
