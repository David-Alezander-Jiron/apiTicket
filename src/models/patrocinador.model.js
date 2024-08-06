const sponsor = (sequelize, type) => {
    return sequelize.define('sponsors', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID del patrocinador'
        },
        nombre: {
            type: type.STRING,
            comment: 'Nombre del patrocinador'
        },
        descripcion: {
            type: type.TEXT,
            comment: 'Descripción del patrocinador'
        },
        correo: {
            type: type.STRING,
            comment: 'Correo electrónico del patrocinador'
        },
        estado: {
            type: type.BOOLEAN,
            defaultValue: true,
            comment: 'Estado del patrocinador'
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de creación del patrocinador'
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de actualización del patrocinador'
        }
    }, {
        timestamps: true,
        comment: 'Tabla de patrocinadores'
    });
};

module.exports = sponsor;
