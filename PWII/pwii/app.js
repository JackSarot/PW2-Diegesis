var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var consejoRouter = require('./routes/consejo/consejo.router');
var eventoRouter = require('./routes/evento/evento.router');
var favoritoHistoriaRouter = require('./routes/favorito-historia/favorito-historia.router');
var favoritoUsuarioRouter = require('./routes/favorito-usuario/favorito-usuario.router');
var historiaRouter = require('./routes/historia/historia.router');
var usuarioRouter = require('./routes/usuario/usuario.router');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/consejo', consejoRouter);
app.use('/api/evento', eventoRouter);
app.use('/api/favorito-historia', favoritoHistoriaRouter);
app.use('/api/favorito-usuario', favoritoUsuarioRouter);
app.use('/api/historia', historiaRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;
