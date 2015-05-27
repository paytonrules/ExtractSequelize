var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/', function(req, res, next) {
  models.User.findAll({}).then(function(users) {
    res.render('index', { title: 'Express', users: users });
  });
});

router.post('/', function(req, res, next) {
  models.User.create({username: req.body.username });
  res.redirect('/users');
});


module.exports = router;
