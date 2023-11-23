const express = require('express');
const Router = express.Router();
const {
    CreateEvent,
    DeleteEvent,
    UpdateEvent,
    GetCurrentEvent,
} = require('./evento.controller');

Router.get('/', GetCurrentEvent);
Router.post('/', CreateEvent);
Router.put('/:_id', UpdateEvent);
Router.delete('/:_id', DeleteEvent);

module.exports = Router;
