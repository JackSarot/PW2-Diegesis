const express = require('express');
const Router = express.Router();
const {
    CreateEvent,
    DeleteEvent,
    GetAllEvents,
    UpdateEvent,
} = require('./evento.controller');

Router.get('/', GetAllEvents);
Router.post('/', CreateEvent);
Router.put('/:_id', UpdateEvent);
Router.delete('/:_id', DeleteEvent);

module.exports = Router;
