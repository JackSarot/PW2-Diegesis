const FavoritoUsuario = require('./favorito-usuario.model');

const GetAll = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};
const GetUsuarioFavoritos = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};
const CreateFavorito = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};
const DeleteFavorito = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

module.exports = {
    GetAll,
    GetUsuarioFavoritos,
    CreateFavorito,
    DeleteFavorito,
};
