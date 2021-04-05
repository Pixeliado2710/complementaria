const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app = express();


//configuracionesz
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authetication'));
app.use('/links', require('./routes/links'));
//app.use('/inicio', require('./routes/azaleia'));
app.use('/administradors', require('./routes/administrador'));
app.use('/pedido', require('./routes/pedidos'));
app.use('/v1', require('./routes/parcial/v1s'));
app.use('/v2', require('./routes/parcial/v2s'));
app.use('/v3', require('./routes/parcial/v3s'));
app.use('/v4', require('./routes/parcial/v4s'));
app.use('/v1', require('./routes/electiva/4semestre'));
app.use('/estudiantes', require('./routes/electiva/4semestre'));
app.use('/materias', require('./routes/electiva/4semestre'));
app.use('/clases', require('./routes/electiva/4semestre'));


//app.use('/productos', require('./routes/productos'));
//app.use('/rol', require('./routes/roles'));
//app.use('/usuarios', require('./routes/usuarios'));
//app.use('/reportes', require('./routes/reportes'));



//public
app.unsubscribe(express.static(path.join(__dirname, 'public')));
//inicia el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});