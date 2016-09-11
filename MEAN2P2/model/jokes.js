/**
 * Created by David on 04 Sep 2016.
 */
var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];



module.exports = {
    allJokes : jokes,
    getRandomJoke : function(){
        return jokes[Math.floor(Math.random()*jokes.length)];
    },
    addJoke : function (newJoke) {
        jokes.push(newJoke);
    }
}

