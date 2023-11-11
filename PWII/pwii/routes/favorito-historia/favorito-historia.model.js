const mongoose = require('mongoose');

const FavoritoHistoriaSchema = new mongoose.Schema(
    {
        Usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true,
        },
        HistoriaFavorita: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true,
        },
        FechaFavorito: {
            type: Date,
        },
    },
    { versionKey: false }
);

FavoritoHistoriaSchema.index(
    { Usuario: 1, HistoriaFavorita: 1 },
    { unique: true }
);

const FavoritoHistoria = mongoose.model(
    'FavoritoHistoria',
    FavoritoHistoriaSchema
);

module.exports = FavoritoHistoria;
