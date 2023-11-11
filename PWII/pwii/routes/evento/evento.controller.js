const { default: mongoose } = require('mongoose');
const Evento = require('./evento.model');

const GetAllEvents = async (req, res) => {
    try {
        const list = await Evento.find().lean().exec();
        res.send({
            success: true,
            message: 'Lista de Eventos',
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

const CreateEvent = async (req, res) => {
    try {
        const _b = req.body;

        const event = await Evento.create({
            NombreEvento: _b.NombreEvento,
            Explicacion: _b.Explicacion,
        });

        res.send({
            success: true,
            message: 'Evento Creado',
            data: event,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const UpdateEvent = async (req, res) => {
    try {
        const _b = req.body;
        const idUpdate = new mongoose.Types.ObjectId(req.params._id);

        const updted = await Evento.findByIdAndUpdate(
            { _id: idUpdate },
            {
                NombreEvento: _b.NombreEvento,
                Explicacion: _b.Explicacion,
            },
            { new: true }
        );

        res.send({
            success: true,
            message: 'Evento Actualizado',
            data: updted,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const DeleteEvent = async (req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.params._id);

        await Evento.findByIdAndDelete({ _id: id }).exec();

        res.send({
            success: true,
            message: 'Evento Eliminado',
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

module.exports = { GetAllEvents, CreateEvent, UpdateEvent, DeleteEvent };
