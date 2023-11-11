const { default: mongoose } = require('mongoose');
const Historia = require('./historia.model');

const GetHistoria = async (req, res) => {
    try {
        const idSearch = new mongoose.Types.ObjectId(req.params._id);

        const history = await Historia.findById({ _id: idSearch })
            .lean()
            .exec();

        res.send({
            success: true,
            message: 'Historia Encontrada',
            data: history,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const GetHistorias = async (req, res) => {
    try {
        const list = await Historia.find({ Activo: true }).lean().exec();

        res.send({
            success: true,
            message: 'Historias Encontrada',
            data: list,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const CreateHistoria = async (req, res) => {
    try {
        const b = req.body;

        const created = Historia.create({
            Titulo: b.Titulo,
            Portada: b.Portada,
            Sinopsis: b.Sinopsis,
            Texto: b.Texto,
            FechaCreacion: new Date(b.FechaCreacion),
            Activo: true,
        });

        res.send({
            success: true,
            message: 'Historia Creada',
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

const UpdateHistoria = async (req, res) => {
    try {
        const b = req.body;
        const idUpdate = new mongoose.Types.ObjectId(req.params._id);

        const updated = await Historia.findByIdAndUpdate(
            { _id: idUpdate },
            {
                Titulo: b.Titulo,
                Portada: b.Portada,
                Sinopsis: b.Sinopsis,
                Texto: b.Texto,
                Activo: b.Activo,
            },
            { new: true }
        );

        res.send({
            success: true,
            message: 'Historia Actualizada',
            data: updated,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const DeleteHistoria = async (req, res) => {
    try {
        const idDelete = new mongoose.Types.ObjectId(req.params._id);

        await Historia.findByIdAndDelete({ _id: idDelete }).exec();

        res.send({
            succes: true,
            message: 'Historia Eliminada',
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
    GetHistoria,
    GetHistorias,
    CreateHistoria,
    UpdateHistoria,
    DeleteHistoria,
};
