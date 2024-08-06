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
const personalModel = require('../models/personal');
const rolesModel = require('../models/roles');
const ticketsModel = require('../models/tickets');
const tipoEventoModel = require('../models/tipoevento');
const ubiPersonalModel = require('../models/ubi_personal');
const detallesModel = require('../models/detallesModel');
const eventoLocacionModel = require('../models/evento_locacion');
const eventoParticipantesModel = require('../models/evento_participantes');
const eventoPatrocinadoresModel = require('../models/evento_patrocinadores');
const eventoPersonalModel = require('../models/evento_personal');
const eventoTicketsModel = require('../models/evento_tickets');
const locacionModel = require('../models/locacion');
const eventoModel = require('../models/evento'); // Asegúrate de que el archivo esté en la ruta correcta

// Inicializar modelos
const usuario = usuarioModel(sequelize, DataTypes);
const pagina = paginaModel(sequelize, DataTypes);
const participantes = participantesModel(sequelize, DataTypes);
const patrocinadores = patrocinadoresModel(sequelize, DataTypes);
const personal = personalModel(sequelize, DataTypes);
const roles = rolesModel(sequelize, DataTypes);
const tickets = ticketsModel(sequelize, DataTypes);
const tipoEvento = tipoEventoModel(sequelize, DataTypes);
const ubiPersonal = ubiPersonalModel(sequelize, DataTypes);
const detalles = detallesModel(sequelize, DataTypes);
const eventoLocacion = eventoLocacionModel(sequelize, DataTypes);
const eventoParticipantes = eventoParticipantesModel(sequelize, DataTypes);
const eventoPatrocinadores = eventoPatrocinadoresModel(sequelize, DataTypes);
const eventoPersonal = eventoPersonalModel(sequelize, DataTypes);
const eventoTickets = eventoTicketsModel(sequelize, DataTypes);
const locacion = locacionModel(sequelize, DataTypes);
const evento = eventoModel(sequelize, DataTypes); // Asegúrate de que esto sea correcto

// Definir relaciones
locacion.belongsToMany(evento, { through: eventoLocacion, foreignKey: 'locacion_id' });
evento.belongsToMany(locacion, { through: eventoLocacion, foreignKey: 'evento_id' });

participantes.belongsToMany(evento, { through: eventoParticipantes, foreignKey: 'participante_id' });
evento.belongsToMany(participantes, { through: eventoParticipantes, foreignKey: 'evento_id' });

patrocinadores.belongsToMany(evento, { through: eventoPatrocinadores, foreignKey: 'patrocinador_id' });
evento.belongsToMany(patrocinadores, { through: eventoPatrocinadores, foreignKey: 'evento_id' });

personal.belongsToMany(evento, { through: eventoPersonal, foreignKey: 'personal_id' });
evento.belongsToMany(personal, { through: eventoPersonal, foreignKey: 'evento_id' });

tickets.belongsToMany(evento, { through: eventoTickets, foreignKey: 'ticket_id' });
evento.belongsToMany(tickets, { through: eventoTickets, foreignKey: 'evento_id' });

personal.hasMany(ubiPersonal, { foreignKey: 'personal_id' });
ubiPersonal.belongsTo(personal, { foreignKey: 'personal_id' });

detalles.belongsTo(evento, { foreignKey: 'evento_id' });
evento.hasMany(detalles, { foreignKey: 'evento_id' });

evento.hasMany(eventoLocacion, { foreignKey: 'evento_id' });
eventoLocacion.belongsTo(evento, { foreignKey: 'evento_id' });

evento.hasMany(eventoParticipantes, { foreignKey: 'evento_id' });
eventoParticipantes.belongsTo(evento, { foreignKey: 'evento_id' });

evento.hasMany(eventoPatrocinadores, { foreignKey: 'evento_id' });
eventoPatrocinadores.belongsTo(evento, { foreignKey: 'evento_id' });

evento.hasMany(eventoPersonal, { foreignKey: 'evento_id' });
eventoPersonal.belongsTo(evento, { foreignKey: 'evento_id' });

evento.hasMany(eventoTickets, { foreignKey: 'evento_id' });
eventoTickets.belongsTo(evento, { foreignKey: 'evento_id' });

pagina.belongsTo(evento, { foreignKey: 'evento_id' });
evento.hasMany(pagina, { foreignKey: 'evento_id' });

module.exports = {
    sequelize,
    Sequelize,
    usuario,
    pagina,
    participantes,
    patrocinadores,
    personal,
    roles,
    tickets,
    tipoEvento,
    ubiPersonal,
    detalles,
    eventoLocacion,
    eventoParticipantes,
    eventoPatrocinadores,
    eventoPersonal,
    eventoTickets,
    locacion,
    evento // Asegúrate de que esto esté exportado
};
