const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const {products} = res.locals
  res.render('index', { products });
});

module.exports = router;
