const mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',    
  password: '',      
  database: 'crud' 
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('successfully connected');
});
module.exports = conn;