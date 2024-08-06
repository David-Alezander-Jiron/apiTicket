const ticket = (sequelize, type) => {
    return sequelize.define('tickets', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del ticket'
        },
        codigo: {
            type: type.STRING,
            comment: 'Código del ticket'
        },
        precio: {
            type: type.DECIMAL(10, 2),
            comment: 'Precio del ticket'
        },
        estadoTicket: {
            type: type.STRING,
            comment: 'Estado del ticket'
        },
        compradorId: {
            type: type.INTEGER,
            comment: 'ID del comprador'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del ticket'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del ticket'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del ticket'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de tickets'
    });
};

module.exports = ticket;
