const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
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

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });

//extracionModelos
const userModel = require('../models/user.model');
const detallesModel = require('../models/detallesModel');
const eventoModel = require('../models/evento');
const eventoLocacion = require('../models/evento_locacion');
const eventoParticipante = require('../models/evento_participantes');
const eventoPatrocinador = require('../models/evento_patrocinadores');
const eventoPersonal = require('../models/evento_personal');
const eventoTicket = require('../models/evento_tickets');
const locacionModel = require('../models/locacion');
const patrocinadorModel = require('../models/patrocinadores');
const personalModel = require('../models/personal');
const participanteModel = require('../models/participantes');
const ticketModel = require('../models/tickets');
const paginaMode = require('../models/pagina');
const categoriaModel = require('../models/tipoevento');
const rolesModel = require('../models/roles')
const ubicacionPersonal = require('../models/ubi_personal');
//zincronia tablas
const user = userModel(sequelize, Sequelize);
const detalles = detallesModel(sequelize, Sequelize);
const evento = eventoModel(sequelize, Sequelize);
const eventoLocacio = eventoLocacion(sequelize, Sequelize);
const eventoParticipantes = eventoParticipante(sequelize, Sequelize);
const eventoPatrocinadores = eventoPatrocinador(sequelize, Sequelize);
const eventoPersonals = eventoPersonal(sequelize, Sequelize);
const eventoTickets = eventoTicket(sequelize, Sequelize);
const locacion = locacionModel(sequelize, Sequelize);
const patrocinador = patrocinadorModel(sequelize, Sequelize);
const personal = personalModel(sequelize, Sequelize);
const participante = participanteModel(sequelize, Sequelize);
const ticket = ticketModel(sequelize, Sequelize);
const pagina = paginaMode(sequelize, Sequelize);
const categoria = categoriaModel(sequelize, Sequelize);
const roles = rolesModel(sequelize, Sequelize);
const ubicacionPersonals = ubicacionPersonal(sequelize, Sequelize);
//relaciones


sequelize.sync({ alter: true }) // alter will update the database schema to match the model
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });

// Exportar el objeto sequelize
module.exports = {
    
};