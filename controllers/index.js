var express = require('express');
var router = new express.Router();

var filmRouter = require('./films.js');
var reviewRouter = require('./reviews.js');

router.use('/films', filmRouter);
router.use('/reviews', reviewRouter);

router.get('/', function (req, res) {
  res.json({data: 'Home Page'});
});

router.get('/about', function (req, res){
  res.json({about: 'This site is all about Films and their reviews!'});
});

module.exports = router;