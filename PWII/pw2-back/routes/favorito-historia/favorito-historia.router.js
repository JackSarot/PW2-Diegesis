const express = require('express');
const Router = express.Router();
const {
    CreateFavorite,
    DeleteFavorite,
    GetUserFavorites,
    CheckIfHistoriaIsFavorita,
} = require('./favorito-historia.controller');

Router.get('/:_id', GetUserFavorites);
Router.post('/', CreateFavorite);
Router.delete('/:_idUser/:_idHistoria', DeleteFavorite);
Router.get('/:_idUser/:_idHistoria', CheckIfHistoriaIsFavorita);

module.exports = Router;
