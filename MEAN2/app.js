var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    req.calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    };

    next();
});


app.get("/api/calculator/*",function(req,res){
    res.send(req.calculatorRequest.n1 + " " +  " " + req.calculatorRequest.operation + " " + req.calculatorRequest.n2);
});


app.listen(3000,function(){
    console.log("Server started, listening on: "+3000);
});

