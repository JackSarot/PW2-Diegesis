const express = require('express');
const Router = express.Router();
const {
    CreateHistoria,
    DeleteHistoria,
    GetHistoria,
    UpdateHistoria,
    GetHistoriasByUser,
    GetHistoriasByKeyword,
    GetHistorias,
} = require('./historia.controller');

Router.get('/search/:keyword', GetHistoriasByKeyword);
Router.get('/get-all/:orderBy', GetHistorias);
Router.get('/:_id', GetHistoria);
Router.post('/', CreateHistoria);
Router.put('/:_id', UpdateHistoria);
Router.delete('/:_id', DeleteHistoria);
Router.get('/usuario/:_idUser', GetHistoriasByUser);

module.exports = Router;
