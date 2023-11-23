const express = require('express');
const Router = express.Router();
const {
    DeleteUsuario,
    GetUsuario,
    GetUsuarios,
    UpdateUsuario,
    UpdateFotoUsuario,
    UpdatePassword,
} = require('./usuario.controller');

Router.get('/', GetUsuarios);
Router.put('/:_id', UpdateUsuario);
Router.delete('/:_id', DeleteUsuario);
Router.get('/:_id', GetUsuario);
Router.put('/foto/:_id', UpdateFotoUsuario);
Router.put('/credenciales/:_id', UpdatePassword);

module.exports = Router;
