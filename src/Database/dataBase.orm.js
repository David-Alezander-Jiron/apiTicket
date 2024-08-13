const { Sequelize, DataTypes } = require("sequelize");
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

// Importar modelos
const usuarioModel = require('../models/usuarios.model');
const paginaModel = require('../models/pagina');
const participantesModel = require('../models/participantes');
const patrocinadoresModel = require('../models/patrocinadores');
const personalsModel = require('../models/personal');
const rolesModel = require('../models/roles');
const ticketsModel = require('../models/tickets');
const tipoEventoModel = require('../models/tipo_evento.model');
const ubiPersonalModel = require('../models/ubi_personal');
const servicioModel = require('../models/servicios.model');
const eventoLocacionModel = require('../models/evento_locacion');
const eventoParticipantesModel = require('../models/evento_participantes');
const eventoPatrocinadoresModel = require('../models/evento_patrocinadores');
const eventoPersonalModel = require('../models/evento_personal');
const eventoTicketsModel = require('../models/evento_tickets');
const locacionModel = require('../models/locacion');
const tipoModel = require('../models/tipo'); 
const usuariosRolesModel = require('../models/usuarios_roles.model');
const eventoModel = require('../models/evento');

// Inicializar modelos
const usuarios = usuarioModel(sequelize, DataTypes);
const paginas = paginaModel(sequelize, DataTypes);
const participantes = participantesModel(sequelize, DataTypes);
const patrocinadores = patrocinadoresModel(sequelize, DataTypes);
const personals = personalsModel(sequelize, DataTypes);
const roles = rolesModel(sequelize, DataTypes);
const tickets = ticketsModel(sequelize, DataTypes);
const tipo_eventos = tipoEventoModel(sequelize, DataTypes);
const tipos = tipoModel(sequelize, DataTypes);
const ubi_personal = ubiPersonalModel(sequelize, DataTypes);
const evento_locacion = eventoLocacionModel(sequelize, DataTypes);
const evento_participantes = eventoParticipantesModel(sequelize, DataTypes);
const evento_patrocinadores = eventoPatrocinadoresModel(sequelize, DataTypes);
const eventos_personals = eventoPersonalModel(sequelize, DataTypes);
const evento_tickets = eventoTicketsModel(sequelize, DataTypes);
const locaciones = locacionModel(sequelize, DataTypes);
const servicios = servicioModel(sequelize, DataTypes);
const usuarios_roles = usuariosRolesModel(sequelize, DataTypes);
const eventos = eventoModel(sequelize, DataTypes);

// Definir relaciones
locaciones.belongsToMany(eventos, { through: evento_locacion, foreignKey: 'locacion_id' });
eventos.belongsToMany(locaciones, { through: evento_locacion, foreignKey: 'evento_id' });

participantes.belongsToMany(eventos, { through: evento_participantes, foreignKey: 'participante_id' });
eventos.belongsToMany(participantes, { through: evento_participantes, foreignKey: 'evento_id' });

patrocinadores.belongsToMany(eventos, { through: evento_patrocinadores, foreignKey: 'patrocinador_id' });
eventos.belongsToMany(patrocinadores, { through: evento_patrocinadores, foreignKey: 'evento_id' });


tickets.belongsToMany(eventos, { through: evento_tickets, foreignKey: 'ticket_id' });
eventos.belongsToMany(tickets, { through: evento_tickets, foreignKey: 'evento_id' });

tipos.hasMany(tipo_eventos, { foreignKey: 'tipo_id' });
tipo_eventos.belongsTo(tipos, { foreignKey: 'tipo_id' });

personals.hasMany(ubi_personal, { foreignKey: 'personal_id' });
ubi_personal.belongsTo(personals, { foreignKey: 'personal_id' });

eventos.hasMany(evento_locacion, { foreignKey: 'evento_id' });
evento_locacion.belongsTo(eventos, { foreignKey: 'evento_id' });

eventos.hasMany(evento_participantes, { foreignKey: 'evento_id' });
evento_participantes.belongsTo(eventos, { foreignKey: 'evento_id' });

eventos.hasMany(evento_patrocinadores, { foreignKey: 'evento_id' });
evento_patrocinadores.belongsTo(eventos, { foreignKey: 'evento_id' });

eventos.hasMany(evento_tickets, { foreignKey: 'evento_id' });
evento_tickets.belongsTo(eventos, { foreignKey: 'evento_id' });

paginas.belongsTo(eventos, { foreignKey: 'evento_id' });
eventos.hasMany(paginas, { foreignKey: 'evento_id' });

module.exports = {
    sequelize,
    Sequelize,
    usuarios_roles,
    usuarios,
    servicios,
    paginas,
    participantes,
    patrocinadores,
    personals,
    roles,
    tipos,
    tickets,
    tipo_eventos,
    ubi_personal,
    evento_locacion,
    evento_participantes,
    evento_patrocinadores,
    eventos_personals,
    evento_tickets,
    locaciones,
    eventos
};
