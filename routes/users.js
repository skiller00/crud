var express = require('express');
var router = express.Router();
var db =require('../database');
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM users', function (err, data, fields) {
    if (err)throw err
    res.render('user-list', { title: 'User List', userData: data});
  });
});
module.exports = router;
