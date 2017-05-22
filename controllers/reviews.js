var film = require('../client/src/models/film');
var films = require('../client/src/models/films');
var Review = require('../client/src/models/review');

var express = require('express');
var Router = express.Router;
var reviewRouter = new Router();


reviewRouter.post('/', function(req, res){
  var review = req.body.review;
  film.addReview( review );
  res.json( films )
})

reviewRouter.get('/', function(req, res){
  res.json( film );
})



module.exports = reviewRouter;