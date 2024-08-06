const staff = (sequelize, type) => {
    return sequelize.define('staff', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del personal'
        },
        nombre: {
            type: type.STRING,
            comment: 'Nombre del personal'
        },
        apellido: {
            type: type.STRING,
            comment: 'Apellido del personal'
        },
        profesion: {
            type: type.STRING,
            comment: 'Profesión del personal'
        },
        telefono: {
            type: type.STRING,
            comment: 'Teléfono del personal'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del personal'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del personal'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del personal'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de personal'
    });
};

module.exports = staff;
