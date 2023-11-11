const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {
        Foto: {
            type: Object,
            required: false,
            data: Buffer,
            contentType: String,
        },
        Nombre: { type: String, required: true },
        ApellidoPaterno: { type: String, required: true },
        ApellidoMaterno: { type: String, required: false },
        NombreUsuario: { type: String, required: true, unique: true },
        Correo: { type: String, required: true, unique: true },
        FechaNacimiento: { type: Date, required: true },
        Bibiliografia: { type: String, required: false },
        Password: { type: String, required: true },
    },
    { versionKey: false }
);

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
