const express = require('express');
const Router = express.Router();
const {
    CreateConsejo,
    DeleteConsejo,
    GetAllConsejos,
    UpdateConsejo,
} = require('./consejo.controller');

Router.get('/', GetAllConsejos);
Router.delete('/:_id', DeleteConsejo);
Router.put('/:_id', UpdateConsejo);
Router.post('/', CreateConsejo);

module.exports = Router;
