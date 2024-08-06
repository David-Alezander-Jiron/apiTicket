const role = (sequelize, type) => {
    return sequelize.define('roles', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del rol'
        },
        nombreRol: {
            type: type.STRING,
            comment: 'Nombre del rol'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del rol'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del rol'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del rol'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de roles'
    });
};

module.exports = role;
