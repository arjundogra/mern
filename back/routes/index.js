var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("Get Route");
});
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send("received")
});
module.exports = router;
