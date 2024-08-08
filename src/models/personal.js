const personals = (sequelize, type) => {
  return sequelize.define('personals', {
    id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'ID del personal'
      },
      nombre: {
        type: type.STRING,
        allowNull: false,
        comment: 'Nombre del personal'
      },
      apellido: {
        type: type.STRING,
        allowNull: false,
        comment: 'Apellido del personal'
      },
      telefono: {
        type: type.STRING,
        allowNull: false,
        comment: 'Teléfono del personal'
      },
      rol: {
        type: type.STRING,
        allowNull: false,
        comment: 'Rol del personal'
      }
    }, {
      timestamps: true,
      comment: 'Tabla de personal'
    });
  };

module.exports = personals;
