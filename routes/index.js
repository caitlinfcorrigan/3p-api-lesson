var express = require('express');
var router = express.Router();

const catsCtrl = require('../controllers/cats');




/* GET home page. */
router.get('/cats/fact', catsCtrl.index);

router.get('/', function(req, res, next) {
  res.render('index');
})

module.exports = router;
