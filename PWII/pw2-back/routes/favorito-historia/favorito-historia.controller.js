const { default: mongoose } = require('mongoose');
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
        const idUser = new mongoose.Types.ObjectId(req.params._id);

        const favorites = await FavoritoHistoria.find({ Usuario: idUser })
            .populate({
                path: 'HistoriaFavorita',
                populate: {
                    path: 'Autor',
                },
            })
            .lean()
            .exec();

        res.send({
            success: true,
            message: 'Lista de Historias Favoritas.',
            data: favorites,
        }).end();
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
        const _b = req.body;

        if (_b._idUser === undefined || _b._idUser === '')
            return res
                .send({
                    success: false,
                    message: 'Variable _idUser es obligatorio.',
                })
                .end();

        if (_b._idHistoria === undefined || _b._idHistoria === '')
            return res.send({
                success: false,
                message: 'Variable _idHistoria es obligatorio.',
            });

        const favorite = await FavoritoHistoria.create({
            Usuario: new mongoose.Types.ObjectId(_b._idUser),
            HistoriaFavorita: new mongoose.Types.ObjectId(_b._idHistoria),
            FechaFavorito: new Date(),
        });

        //retorna true, de que es favorita
        res.send({
            success: true,
            message: 'Se ha marcado la historia como Favorita.',
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
const DeleteFavorite = async (req, res) => {
    try {
        const idUser = new mongoose.Types.ObjectId(req.params._idUser);
        const idHistoria = new mongoose.Types.ObjectId(req.params._idHistoria);

        await FavoritoHistoria.findOneAndDelete({
            Usuario: idUser,
            HistoriaFavorita: idHistoria,
        })
            .lean()
            .exec();

        //retorna false, de que no es favorita
        res.send({
            success: true,
            message: 'Historia ya no es favorita.',
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

const CheckIfHistoriaIsFavorita = async (req, res) => {
    try {
        const idUser = new mongoose.Types.ObjectId(req.params._idUser);
        const idHistoria = new mongoose.Types.ObjectId(req.params._idHistoria);

        const favorite = await FavoritoHistoria.findOne({
            Usuario: idUser,
            HistoriaFavorita: idHistoria,
        })
            .lean()
            .exec();

        if (!favorite)
            return res
                .send({
                    success: false,
                    message: 'Historia no es favorita.',
                })
                .end();

        res.send({
            success: true,
            message: 'Historia es favorita.',
        });
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
    GetUserFavorites,
    CreateFavorite,
    DeleteFavorite,
    CheckIfHistoriaIsFavorita,
};
