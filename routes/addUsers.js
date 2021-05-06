var express = require('express');
var router = express.Router();
var db=require('../database');


router.get('/addUsers', function(req, res, next) { 
res.render('addUser.ejs'); 
});


router.post('/create', function(req, res, next) {
  const userDetails=req.body;
 
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/');
}); 
module.exports = router;