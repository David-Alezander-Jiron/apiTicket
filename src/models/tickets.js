const tickets = (sequelize, type) => {
    return sequelize.define('tickets', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del ticket'
        },
        evento_id: {
            type: type.INTEGER,
            allowNull: false,
            comment: 'ID del evento'
        },
        codigoQr: {
            type: type.STRING(100),
            allowNull: false,
            comment: 'Código QR del ticket'
        },
        precio: {
            type: type.FLOAT,
            allowNull: false,
            comment: 'Precio del ticket'
        },
        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del ticket'
        },
        participantes_id: {
            type: type.INTEGER,
            allowNull: false,
            comment: 'ID del participante'
        }
    }, {
        timestamps: false,
        comment: 'Tabla de tickets'
    });
};

module.exports = tickets;
