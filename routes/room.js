var express = require('express');
var router = express.Router();
var moniker = require('moniker');
var generator = moniker.generator([moniker.adjective, moniker.noun]);

/* GET room screen. */
router.get('/', function(req, res, next) {
  res.render('room', {
    title: 'Ultimate Bear Fight',
    room: req.baseUrl,
    defaultNickname: generator.choose()
  });
});

module.exports = router;
