const participantes = (sequelize, type) => {
    return sequelize.define('participantes', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del participante'
        },
        nombre: {
            type: type.STRING(100),
            allowNull: false,
            comment: 'Nombre del participante'
        },
        correo: {
            type: type.STRING(100),
            allowNull: false,
            comment: 'Correo del participante'
        },
        telefono: {
            type: type.STRING(20),
            allowNull: false,
            comment: 'Teléfono del participante'
        },
        evento_id: {
            type: type.INTEGER,
            allowNull: false,
            comment: 'ID del evento'
        },
        estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del participante'
        }
    }, {
        timestamps: false,
        comment: 'Tabla de participantes'
    });
};

module.exports = participantes;
