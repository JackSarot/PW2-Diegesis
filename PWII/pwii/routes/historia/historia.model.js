const mongoose = require('mongoose');

const HistoriaSchema = new mongoose.Schema(
    {
        Titulo: { type: String, required: true, unique: true },
        Portada: {
            type: Object,
            required: true,
            data: Buffer,
            contentType: String,
        },
        Sinopsis: {
            type: String,
            required: true,
        },
        Texto: {
            type: String,
            required: true,
        },
        FechaCreacion: {
            type: Date,
            required: true,
        },
        Activo: {
            type: Boolean,
        },
    },
    { versionKey: false }
);

const Historia = mongoose.model('Historia', HistoriaSchema);

module.exports = Historia;
