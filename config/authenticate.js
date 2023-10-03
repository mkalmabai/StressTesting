/**
 * Created by iyogeshjoshi on 29/10/14.
 */
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
    passport.use(new LocalStrategy(
        function(username, password, done){
            user = {
                username: username,
                password: password
            };
            if(username == 'yogi' && password=='yogi'){
                done(null, user);
            }
            done(null, false, {message: 'Incorrect username/password!'});
        }
    ));
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });
    passport.deserializeUser(function(username, done){
        done(null, user);
    })
};

module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }else{
        res.redirect('/');
    }
}

module.exports.authenticate = passport.authenticate('local', {
                                successRedirect: '/',
                                failureRedirect: '/',
                                failureFlash: true
                            });
