var express = require('express');
const { get } = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
get('/',(req, res) => {
  res.render('login')
})

router
get('/ok',(req, res) => {
  res.render('ok')
})

module.exports = router;
