const MYSQLHOST = 'br6iczewedss87osvtat-mysql.services.clever-cloud.com';
const MYSQLUSER = 'uys2fmuxrhzfkztf';
const MYSQLPASSWORD = 'xGEdMNzOiXr1o6tb17k9';
const MYSQLDATABASE = 'br6iczewedss87osvtat';
const MYSQLPORT = '3306'; // Puerto de la base de datos
const MYSQL_URI = process.env.MYSQL_URI ?? 'mysql://uys2fmuxrhzfkztf:xGEdMNzOiXr1o6tb17k9@br6iczewedss87osvtat-mysql.services.clever-cloud.com:3306/br6iczewedss87osvtat'; // URI de conexión a la base de datos (si es necesario)

// Exportar las variables de configuración
module.exports = {
    MYSQLHOST,
    MYSQLUSER,
    MYSQLPASSWORD,
    MYSQLDATABASE,
    MYSQLPORT,
    MYSQL_URI
};