const event = (sequelize, type) => {
    return sequelize.define('events', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del evento'
        },
        nombre: {
            type: type.STRING,
            comment: 'Nombre del evento'
        },
        fecha: {
            type: type.DATE,
            comment: 'Fecha del evento'
        },
        capacidad: {
            type: type.INTEGER,
            comment: 'Capacidad del evento'
        },
        ubicacion: {
            type: type.STRING,
            comment: 'Ubicación del evento'
        },
        organizador: {
            type: type.STRING,
            comment: 'Organizador del evento'
        },
        tipoId: {
            type: type.INTEGER,
            comment: 'ID del tipo del evento'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del evento'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del evento'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del evento'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de eventos'
    });
};

module.exports = event;
