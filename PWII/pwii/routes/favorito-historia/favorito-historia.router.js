const express = require('express');
const Router = express.Router();
const {
    CreateFavorite,
    DeleteFavorite,
    GetAll,
    GetUserFavorites,
} = require('./favorito-historia.controller');

Router.get('/:_idUsuario', GetUserFavorites);
Router.get('/', GetAll);
Router.post('/', CreateFavorite);
Router.delete('/:_id', DeleteFavorite);

module.exports = Router;
