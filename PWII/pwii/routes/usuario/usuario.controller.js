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
                FechaNacimiento: new Date(_b.FechaNacimiento),
                Bibiliografia: _b.Bibiliografia,
                Foto: _b.Foto,
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

        const user = await Usuario.findById({ _id: idSearch }).exec();

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

module.exports = {
    CreateUsuario,
    UpdateUsuario,
    GetUsuario,
    GetUsuarios,
    DeleteUsuario,
};
