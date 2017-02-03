var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.post('/', function (req, res) {
    console.log(req.body.name);
    res.render('hello', {name: req.body.name });
});

module.exports = router;
