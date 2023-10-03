/**
 * Created by iyogeshjoshi on 29/10/14.
 */
// All the app routes for node app goes here
var users = require('./users');
var routes = require('./index');
var home = require('./home.js');
var isAuthenticated = require('../config/authenticate').isAuthenticated;
var authenticate = require('../config/authenticate').authenticate;

module.exports = function(app, passport){
    app.get('/', routes.index);
    //app.get('/login', routes);
    app.get('/login', routes.index);
    app.get('/users', users.index);
    app.post('/login', authenticate );
    app.get('/logout', routes.logout)
    // check isAuthenticated before each route which require
    // authentication
    app.use('/home', isAuthenticated, home.index);
};
