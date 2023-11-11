const FavoritoHistoria = require('./favorito-historia.model');

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
const GetUserFavorites = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};
const CreateFavorite = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};
const DeleteFavorite = async (req, res) => {
    try {
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

module.exports = { GetAll, GetUserFavorites, CreateFavorite, DeleteFavorite };
