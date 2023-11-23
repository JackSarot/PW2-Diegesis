const jwt = require('jsonwebtoken');
require('dotenv').config();
const Usuario = require('../routes/usuario/usuario.model');

const secret = process.env.JWT_SECRET;
const expires = process.env.JWT_EXPIRES;

const newToken = (Usuario) => {
    return jwt.sign({ id: Usuario._id }, secret, { expiresIn: expires });
};

const verifyToken = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, payload) => {
            if (err) return reject(err);
            resolve(payload);
        });
    });
const registrarUsuario = async (req, res) => {
    try {
        const bdy = req.body;

        const user = await Usuario.create({
            Foto: bdy.Foto,
            Nombre: bdy.Nombre,
            ApellidoPaterno: bdy.ApellidoPaterno,
            ApellidoMaterno: bdy.ApellidoMaterno,
            NombreUsuario: bdy.NombreUsuario,
            Correo: bdy.Correo,
            FechaNacimiento: bdy.FechaNacimiento,
            Bibiliografia: bdy.Bibiliografia,
            Password: bdy.Password,
        });

        const token = newToken(user);

        res.send({
            success: true,
            message: 'Petición Exitosa.',
            data: { user: user._id, token },
        }).end();
    } catch (error) {
       
        res.send({
            success: false,
            message: 'Error al Registrar Usuario en el Servidor.',
            data: error,
        }).end();
    }
};

const loginUsuario = async (req, res) => {
    try {
        const bdy = req.body;

        if (bdy.Usuario === null || bdy.Usuario === '')
            return res
                .status(400)
                .send({
                    success: false,
                    message: 'Error no se encuentra el Usuario en la Petición.',
                    data: {},
                })
                .end();

        const user = await Usuario.findOne({
            NombreUsuario: bdy.NombreUsuario,
        })
            .select('_id Nombre NombreUsuario Correo Password')
            .lean()
            .exec();

        if (!user)
            return res
                .status(400)
                .send({
                    success: false,
                    message: 'Usuario no existe.',
                })
                .end();

        if (bdy.Password !== user.Password)
            return res
                .status(400)
                .send({
                    success: false,
                    message: 'Credenciales de Inicio de Sesión no concuerdan.',
                    data: {},
                })
                .end();

        const token = newToken(user);

        res.send({
            success: true,
            message: 'Petición Exitosa.',
            data: { user: user._id, token },
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error al Iniciar Sesión en el Servidor',
            data: error,
        }).end();
    }
};

const protect = async (req, res, next) => {
    try {
        const bearer = req.headers.authorization;

        if (!bearer || !bearer.startsWith('Bearer '))
            return res
                .status(400)
                .send({
                    success: false,
                    message: 'Error al validar la Petición.',
                    data: {},
                })
                .end();

        const token = bearer.split('Bearer ')[1].trim();
        let payload;
        payload = await verifyToken(token);
        const user = await Usuario.findById({ _id: payload.id })
            .select('-Password')
            .lean()
            .exec();

        if (!user)
            res.status(404).send({
                success: false,
                message: 'Token no es válido.',
                data: token,
            });

        //A este punto el Token es válido y el Usuario del token existe
        //Por lo tanto to está bien. Aunque probablemente se necesiten
        //mas verificaciones en un futuro
        next();
    } catch (error) {
        res.status(401)
            .send({
                success: false,
                message: 'Token no Validado.',
                data: error,
            })
            .end();
    }
};

module.exports = {
    registrarUsuario,
    loginUsuario,
    protect,
};
