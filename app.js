var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

var router = require('./routes/routes');
/*var users = require('./routes/users');
var routes = require('./routes/index');*/
var home = require('./routes/home');
// configs
/*var isAuthenticated = require('./config/authenticate').isAuthenticated;
var authenticate = require('./config/authenticate').authenticate;*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

// passport authentication
var Auth = require('./config/authenticate')();

// define routes
router(app, passport);
/*
app.get('/', routes);
app.get('/login', routes);
app.use('/users', users);

app.post('/login',authenticate );
// check isAuthenticated before each route which require
// authentication
app.get('/home', isAuthenticated, home);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stack traces leaked to user
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
