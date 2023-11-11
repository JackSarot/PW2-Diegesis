const { request } = require('express');
const Consejo = require('./consejo.model');
const { default: mongoose } = require('mongoose');

const GetAllConsejos = async (req, res) => {
    try {
        const list = await Consejo.find().lean().exec();

        res.send({
            success: true,
            message: 'Obtener todos los consejos',
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

const CreateConsejo = async (req, res) => {
    try {
        const _b = req.body;

        const consj = await Consejo.create({
            NombreConsejo: _b.NombreConsejo,
            Contenido: _b.Contenido,
        });

        res.send({
            succes: true,
            message: 'Consejo Creado',
            data: consj,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const DeleteConsejo = async (req, res) => {
    try {
        const idToDelete = req.params._id;

        await Consejo.findByIdAndDelete({ _id: idToDelete }).exec();

        res.send({
            succes: true,
            message: 'Consejo Eliminado',
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

const UpdateConsejo = async (req, res) => {
    try {
        const _b = req.body;
        const idToUpd = new mongoose.Types.ObjectId(req.params._id);

        let updated = await Consejo.findByIdAndUpdate(
            { _id: idToUpd },
            { NombreConsejo: _b.NombreConsejo, Contenido: _b.Contenido },
            { new: true }
        );

        res.send({
            succes: true,
            message: 'Consejo Actualizado',
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

module.exports = {
    GetAllConsejos,
    CreateConsejo,
    DeleteConsejo,
    UpdateConsejo,
};
