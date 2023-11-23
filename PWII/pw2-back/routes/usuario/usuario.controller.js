const { default: mongoose } = require('mongoose');
const Usuario = require('./usuario.model');

const CreateUsuario = async (req, res) => {
    try {
        const _b = req.body;
        const created = await Usuario.create({
            Nombre: _b.Nombre,
            ApellidoPaterno: _b.ApellidoPaterno,
            ApellidoMaterno: _b.ApellidoMaterno,
            NombreUsuario: _b.NombreUsuario,
            Correo: _b.Correo,
            FechaNacimiento: new Date(_b.FechaNacimiento),
            Bibiliografia: _b.Bibiliografia,
            Foto: _b.Foto,
            Password: _b.Password,
        });

        res.send({
            success: true,
            message: 'Usuario Creado',
            data: created,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const UpdateUsuario = async (req, res) => {
    try {
        const _b = req.body;
        const idUpdate = new mongoose.Types.ObjectId(req.params._id);

        const updtd = await Usuario.findByIdAndUpdate(
            { _id: idUpdate },
            {
                Nombre: _b.Nombre,
                ApellidoPaterno: _b.ApellidoPaterno,
                ApellidoMaterno: _b.ApellidoMaterno,
                NombreUsuario: _b.NombreUsuario,
                Correo: _b.Correo,
                Bibliografia: _b.Bibliografia,
            },
            { new: true }
        );

        res.send({
            success: true,
            message: 'Usuario Actualizado',
            data: updtd,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const GetUsuario = async (req, res) => {
    try {
        const idSearch = new mongoose.Types.ObjectId(req.params._id);

        const user = await Usuario.findById({ _id: idSearch })
            .select('-Password')
            .exec();

        res.send({
            success: true,
            message: 'Usuario Encontrado',
            data: user,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const GetUsuarios = async (req, res) => {
    try {
        const user = await Usuario.find().lean().exec();

        res.send({
            success: true,
            message: 'Usuario Encontrado',
            data: user,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const DeleteUsuario = async (req, res) => {
    try {
        const idTdlt = new mongoose.Types.ObjectId(req.params._id);

        await Usuario.findByIdAndDelete({ _id: idTdlt }).exec();

        res.send({
            success: true,
            message: 'Usuario Eliminado',
            data: true,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const UpdateFotoUsuario = async (req, res) => {
    try {
        const p = new mongoose.Types.ObjectId(req.params._id);
        const foto = req.body.Foto;

        const upd = await Usuario.findByIdAndUpdate(
            { _id: p },
            { Foto: foto },
            { new: true }
        );

        res.send({
            success: true,
            message: 'Foto de Perfil Actualizada.',
            data: upd,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const UpdatePassword = async (req, res) => {
    try {
        const p = new mongoose.Types.ObjectId(req.params._id);
        const _b = req.body;

        if (_b.NuevaPassword !== _b.ConfirmarNuevaPassword) {
            return res
                .send({
                    success: false,
                    message:
                        'La Nueva Contraseña debe de ser igual a Confirmar Nueva Contraseña.',
                    data: {},
                })
                .end();
        }

        const user = await Usuario.findById({ _id: p }).lean().exec();

        if (user.Password !== _b.Password) {
            return res
                .send({
                    success: false,
                    message:
                        'La Contraseña dada, no concuerda con la contraseña actual del usuario.',
                    data: {},
                })
                .end();
        }

        await Usuario.findByIdAndUpdate(
            { _id: p },
            { Password: _b.NuevaPassword },
            { new: true }
        );

        res.send({
            success: true,
            message: 'Contraseña del Usuario actualizada.',
        }).end();
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

module.exports = {
    CreateUsuario,
    UpdateUsuario,
    GetUsuario,
    GetUsuarios,
    DeleteUsuario,
    UpdateFotoUsuario,
    UpdatePassword,
};
