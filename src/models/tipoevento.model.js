const eventType = (sequelize, type) => {
    return sequelize.define('eventTypes', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del tipo de evento'
        },
        nombreTipoEvento: {
            type: type.STRING,
            comment: 'Nombre del tipo de evento'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del tipo de evento'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del tipo de evento'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del tipo de evento'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de tipos de evento'
    });
};

module.exports = eventType;
