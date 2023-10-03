/**
 * Created by iyogeshjoshi on 29/10/14.
 */
var express = require('express');

module.exports = {
    index: function(req, res){
        res.render('home', {user: req.user});
    }
};
