const express = require('express');

var router = express.Router();

//MIDDLEWARE
router.use(function(req, res, next){
    console.log("Interceptação pelo middleware ok");
    //log
    next();
});

//Rota teste
router.get('/', function(req, res){
    res.json({'message':'OK, rota de teste está funcionando'});
});

module.exports = router;