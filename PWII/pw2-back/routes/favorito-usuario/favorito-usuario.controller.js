const { default: mongoose } = require('mongoose');
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
        const idUser = new mongoose.Types.ObjectId(req.params._idUsuario);

        const favoritos = await FavoritoUsuario.find({ Usuario: idUser })
            .populate('UsuarioFavorito')
            .exec();

        res.send({
            success: true,
            message: 'Lista de Autores Favoritos.',
            data: favoritos,
        }).end();
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
        const _b = req.body;

        if (_b._idUser === undefined || _b._idUser === '')
            return res
                .send({
                    success: false,
                    message: 'Variable _idUser es obligatorio.',
                })
                .end();

        if (_b._idAutorFav === undefined || _b._idAutorFav === '')
            return res
                .send({
                    success: false,
                    message: 'Variable _idAutorFav es obligatorio.',
                })
                .end();

        const favorite = await FavoritoUsuario.create({
            Usuario: new mongoose.Types.ObjectId(_b._idUser),
            UsuarioFavorito: new mongoose.Types.ObjectId(_b._idAutorFav),
            FechaFavorito: new Date(),
        });

        //retorna true, de que es favorito
        res.send({
            success: true,
            message: 'El Autor seleccionado ahora es Favorito.',
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
const DeleteFavorito = async (req, res) => {
    try {
        const idUser = new mongoose.Types.ObjectId(req.params._idUser);
        const idAutor = new mongoose.Types.ObjectId(req.params._idAutor);

        await FavoritoUsuario.findOneAndDelete({
            Usuario: idUser,
            UsuarioFavorito: idAutor,
        })
            .lean()
            .exec();

        //retorna false, de que no es favorita
        res.send({
            success: true,
            message: 'Autor ya no es favorito.',
            data: false,
        }).end();
    } catch (error) {
        res.send({
            success: false,
            message: 'Error en Servidor',
            data: error,
        }).end();
    }
};

const CheckIfAutorIsFavorito = async (req, res) => {
    try {
        const idUser = new mongoose.Types.ObjectId(req.params._idUser);
        const idAutor = new mongoose.Types.ObjectId(req.params._idAutor);

        const favorite = await FavoritoUsuario.findOne({
            Usuario: idUser,
            UsuarioFavorito: idAutor,
        })
            .lean()
            .exec();

        if (!favorite)
            return res
                .send({
                    success: false,
                    message: 'Usuario no es favorito',
                })
                .end();

        res.send({
            success: true,
            message: 'Usuario es favorito',
        }).end();
    } catch (error) {
        res.status(500)
            .send({
                success: false,
                message: 'Error en Servidor',
                data: error,
            })
            .end();
    }
};

module.exports = {
    GetAll,
    GetUsuarioFavoritos,
    CreateFavorito,
    DeleteFavorito,
    CheckIfAutorIsFavorito,
};
