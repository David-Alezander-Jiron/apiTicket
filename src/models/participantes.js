const participantes = (sequelize, type) => {
  return sequelize.define('participantes', {
      id: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID del participante'
      },
      nombre: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Nombre del participante'
      },
      apellido: {
          type: type.STRING(50),
          allowNull: false,
          comment: 'Apellido del participante'
      },
      correo: {
          type: type.STRING(100),
          allowNull: false,
          unique: true,
          comment: 'Correo electrónico del participante'
      },
      telefono: {
          type: type.STRING(20),
          comment: 'Teléfono del participante'
      },
    estado: {
            type: type.ENUM('activo','inactivo', 'eliminado'),
            allowNull: false,
            defaultValue: 'activo',
            comment: 'Estado del usuario'
        },
      
   {
      timestamps: false,
      comment: 'Tabla de participantes'
  });
};

module.exports = participantes;
