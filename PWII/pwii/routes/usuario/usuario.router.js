const express = require('express');
const Router = express.Router();
const {
    CreateUsuario,
    DeleteUsuario,
    GetUsuario,
    GetUsuarios,
    UpdateUsuario,
} = require('./usuario.controller');

Router.get('/', GetUsuarios);
Router.post('/', CreateUsuario);
Router.put('/:_id', UpdateUsuario);
Router.delete('/:_id', DeleteUsuario);
Router.get('/:_id', GetUsuario);

module.exports = Router;
