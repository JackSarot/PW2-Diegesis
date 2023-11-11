const express = require('express');
const Router = express.Router();
const {
    CreateFavorito,
    DeleteFavorito,
    GetAll,
    GetUsuarioFavoritos,
} = require('./favorito-usuario.controller');

Router.get('/', GetAll);
Router.get('/:_idUsuario', GetUsuarioFavoritos);
Router.post('/', CreateFavorito);
Router.delete('/:_id', DeleteFavorito);

module.exports = Router;
