const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema(
    {
        NombreEvento: { type: String, unique: true },
        Explicacion: String,
    },
    { versionKey: false }
);

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;
