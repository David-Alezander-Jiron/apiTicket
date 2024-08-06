const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 2,
            acquire: 30000,
            idle: 10000
        }
    });
}

/* sequelize.sync({ force: true })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    }); */

const usuarioModel = require('../models/usuarios.model');

const usuario = usuarioModel(sequelize, Sequelize);

sequelize.sync({ alter: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });

module.exports = {
    
    usuario
};
