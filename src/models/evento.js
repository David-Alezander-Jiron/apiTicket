const eventos = (sequelize, type) => {
    return sequelize.define('eventos', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del evento'
        },
        nombre: {
            type: type.STRING(100),
            allowNull: false,
            comment: 'Nombre del evento'
        },
        fecha: {
            type: type.DATE,
            allowNull: false,
            comment: 'Fecha del evento'
        },
        capacidad_personas: {
            type: type.INTEGER,
            allowNull: false,
            comment: 'Capacidad de personas del evento'
        },
        ubicacion: {
            type: type.STRING(255),
            allowNull: true,
            comment: 'Ubicación del evento'
        },
        descripcion: {
            type: type.TEXT,
            allowNull: true,
            comment: 'Descripción del evento'
        },
        tipo_evento: {
            type: type.STRING(100),
            allowNull: false,
            comment: 'Tipo de evento'
        },
        organizador_id: {
            type: type.TEXT,
            allowNull: false,
            comment: 'ID del organizador del evento'
        },
        estado: {
            type: type.ENUM('activo', 'inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del evento'
        }
    }, {
        timestamps: false,
        comment: 'Tabla de eventos'
    });
};

module.exports = eventos;
