var express = require('express');
var jokes = require(__base + 'model/jokes.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var username = req.session.userName;
    res.render('index', {
        title: 'Express',
        username: username
    });
});

router.get('/joke', function(req, res, next) {
    var joke = jokes.getRandomJoke();
    var sess = req.session;
    if(sess.jokeCount){
        sess.jokeCount++;
    } else {
        sess.jokeCount = 1;
    }
    res.render('joke', {
        title: 'Random Jokes',
        joke: joke
    });
});

router.get('/alljokes', function(req, res, next) {
    var sess = req.session;
    if(sess.jokesCount){
        sess.jokesCount++;
    } else {
        sess.jokesCount = 1;
    }
    res.render('alljokes', {
        title: 'All Jokes',
        count: sess.jokesCount,
        allJokes: jokes.allJokes
    });
});

router.get('/addjoke', function(req, res, next) {
    res.render('addjoke', {
        title: 'Add Jokes'});
});

router.get('/storejoke', function(req, res, next) {
    var sess = req.session;
    if(sess.storeJokeCount){
        sess.storeJokeCount++;
    } else {
        sess.storeJokeCount = 1;
    }
    jokes.addJoke(req.query.newjoke);
    res.redirect('/addjoke');
});

router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});

module.exports = router;
