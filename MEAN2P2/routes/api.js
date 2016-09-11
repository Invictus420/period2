/**
 * Created by David on 06 Sep 2016.
 */
var express = require('express');
var jokes = require(__base + 'model/jokes.js');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'This is the API'});
});

router.get('/joke/random', function (req, res) {
    res.json({joke: jokes.getRandomJoke()});
});

router.get('/jokes', function (req, res) {
    res.json({jokes: jokes.allJokes });
});

router.post('/joke', function (req, res) {
    var newJoke = req.body.joke;
    jokes.addJoke(newJoke);
    res.json({joke: newJoke});
});



module.exports = router;
