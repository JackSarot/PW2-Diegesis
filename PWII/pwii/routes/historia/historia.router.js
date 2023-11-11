const express = require('express');
const Router = express.Router();
const {
    CreateHistoria,
    DeleteHistoria,
    GetHistoria,
    GetHistorias,
    UpdateHistoria,
} = require('./historia.controller');

Router.get('/', GetHistorias);
Router.get('/_:id', GetHistoria);
Router.post('/', CreateHistoria);
Router.put('/:_id', UpdateHistoria);
Router.delete('/:_id', DeleteHistoria);

module.exports = Router;
