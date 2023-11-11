const mongoose = require('mongoose');

const ConsejoSchema = new mongoose.Schema(
    {
        NombreConsejo: {
            type: String,
            required: true,
            unique: true,
        },
        Contenido: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

ConsejoSchema.index({ NombreConsejo: 1 }, { unique: true });

const Consejo = mongoose.model('Consejo', ConsejoSchema);

module.exports = Consejo;
