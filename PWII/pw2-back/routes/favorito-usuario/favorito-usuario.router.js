const express = require('express');
const Router = express.Router();
const {
    CreateFavorito,
    DeleteFavorito,
    GetUsuarioFavoritos,
    CheckIfAutorIsFavorito,
} = require('./favorito-usuario.controller');

Router.get('/:_idUsuario', GetUsuarioFavoritos);
Router.post('/', CreateFavorito);
Router.delete('/:_idUser/:_idAutor', DeleteFavorito);
Router.get('/:_idUser/:_idAutor', CheckIfAutorIsFavorito);

module.exports = Router;
