const mongoose = require('mongoose');

const FavoritoUsuarioSchema = new mongoose.Schema(
    {
        Usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        UsuarioFavorito: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        FechaFavorito: {
            type: Date,
        },
    },
    { versionKey: false }
);

FavoritoUsuarioSchema.index(
    { Usuario: 1, UsuarioFavorito: 1 },
    { unique: true }
);

const FavoritoUsuario = mongoose.model(
    'FavoritoUsuario',
    FavoritoUsuarioSchema
);

module.exports = FavoritoUsuario;
