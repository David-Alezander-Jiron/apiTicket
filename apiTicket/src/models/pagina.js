// server/models/pagina.js
module.exports = (sequelize, DataTypes) => {
    const Pagina = sequelize.define('Pagina', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT
      },
      telefono: {
        type: DataTypes.STRING(20)
      },
      horario: {
        type: DataTypes.STRING(50)
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Pagina;
  };
  