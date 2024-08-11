const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../Database/dataBase.orm'); // Ajusta la ruta a tu archivo ORM

const Usuario = db.usuarios; // Asegúrate de que 'usuario' se esté importando correctamente

// Inicio de sesión de usuarios
passport.use(
    'local.signin',
    new LocalStrategy(
        {
            usernameField: 'correo',
            passwordField: 'contrasena',
            passReqToCallback: true,
        },
        async (req, correo, contrasena, done) => {
            try {
                const usuario = await Usuario.findOne({ where: { correo } });
                if (!usuario) {
                    return done(null, false, req.flash('message', 'El correo electrónico no existe.'));
                }

                // Verificar el estado del usuario
                if (usuario.estado !== 'activo') {
                    return done(null, false, req.flash('message', 'Este usuario no está activo.'));
                }

                const validPassword = await bcrypt.compare(contrasena, usuario.contrasena);
                if (!validPassword) {
                    return done(null, false, req.flash('message', 'Contraseña incorrecta.'));
                }

                return done(null, usuario, req.flash('success', `Bienvenido ${usuario.nombres}`));
            } catch (error) {
                return done(error);
            }
        }
    )
);

// El resto de tu código...


passport.use(
    'local.signup',
    new LocalStrategy(
        {
            usernameField: 'correo', // Cambiado de 'correo_electronico' a 'correo'
            passwordField: 'contrasena',
            passReqToCallback: true,
        },
        async (req, correo, contrasena, done) => {
            try {
                const existingUsuario = await Usuario.findOne({ where: { correo } });
                if (existingUsuario) {
                    return done(null, false, req.flash('message', 'El correo electrónico ya está registrado.'));
                }

                const hashedPassword = await bcrypt.hash(contrasena, 10);
                const { nombres, apellidos, telefono } = req.body;

                const nuevoUsuario = await Usuario.create({
                    nombres,
                    apellidos,
                    correo,
                    telefono,
                    contrasena: hashedPassword,
                    estado: 'activo',
                });

                return done(null, nuevoUsuario);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const usuario = await Usuario.findByPk(id);
        done(null, usuario);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;
