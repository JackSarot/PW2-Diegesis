const { default: mongoose } = require('mongoose');
const Historia = require('./historia.model');

const GetHistoria = async (req, res) => {
    try {
        const idSearch = new mongoose.Types.ObjectId(req.params._id);

        const history = await Historia.findById({ _id: idSearch })
            .populate('Autor')
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
        const sortBy = GetOrderByObject(parseInt(req.params.orderBy));

        const list = await Historia.find({
            Activo: true,
        })
            .sort(sortBy)
            .populate('Autor')
            .lean()
            .exec();

        res.send({
            success: true,
            message: 'Historias Encontradas.',
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

const GetHistoriasByKeyword = async (req, res) => {
    try {
        const keyword = req.params.keyword;

        const list = await Historia.find({
            $and: [
                { Activo: true },
                {
                    $or: [
                        { Sinopsis: { $regex: keyword } },
                        { Titulo: { $regex: keyword } },
                    ],
                },
            ],
        })
            .populate('Autor')
            .lean()
            .exec();

        res.send({
            success: true,
            message: 'Historias Encontradas.',
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
            FechaCreacion: new Date(),
            Autor: b.Autor,
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
            },
            { new: true }
        ).populate('Autor');

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
            success: true,
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

const GetHistoriasByUser = async (req, res) => {
    try {
        const idUser = req.params._idUser;

        const historias = await Historia.find({ Autor: idUser }).lean().exec();

        res.send({
            success: true,
            message: 'Historias del Usuario obtenidas',
            data: historias,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const GetOrderByObject = (orderByOption) => {
    switch (orderByOption) {
        case 1:
            return { Titulo: 'asc' };
        case 2:
            return { Titulo: 'desc' };
        case 3:
            return { FechaCreacion: -1 };
        case 4:
            return { FechaCreacion: 1 };
    }
};

module.exports = {
    GetHistoria,
    GetHistoriasByKeyword,
    CreateHistoria,
    UpdateHistoria,
    DeleteHistoria,
    GetHistoriasByUser,
    GetHistorias,
};
