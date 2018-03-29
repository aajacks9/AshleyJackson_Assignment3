var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});

router.get('/Login', function(req, res){
    res.render('Login', {
        title: 'Login'
    });
});

router.get('/notes', function(req, res){
    res.render('notes', {
        title: 'notes'
    });
});

router.get('/editor', function(req, res){
    res.render('editor', {
        title: 'Edit Notes'
    });
});

module.exports = router;
