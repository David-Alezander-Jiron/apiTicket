const participantes = (sequelize, type) => {
  return sequelize.define('Participantes', {
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
      }
  }, {
      timestamps: false,
      comment: 'Tabla de participantes'
  });
};

module.exports = participantes;
