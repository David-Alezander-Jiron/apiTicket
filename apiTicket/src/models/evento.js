// server/models/evento.js
module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      capacidad_personas: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ubicacion: { // Agregar el campo ubicacion
        type: DataTypes.STRING, // Puedes ajustar el tipo de dato según tus necesidades
        allowNull: true // Ajusta esto según tus necesidades (puede ser true o false)
      },
      tipo_evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      organizador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Evento;
  };
  
