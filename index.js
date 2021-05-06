const express = require("express");
const app = express();
const path = require('path');
var users = require("../CRUD/routes/users")
const conn = require("./database");

;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

///app.get("/",(req,res)=>{
///res.render("user-list")
//})

app.use("/",users)
app.get('/addUsers',(req,res)=>{
    res.render("addUser.ejs")
})
app.post("/addUsers",(req,res)=>{  
  const userDetails=req.body;
  var sql = 'INSERT INTO users SET ?';
  conn.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("inserted successfully"); 
  });
 res.redirect('/'); 
});
app.listen(3000, ()=>{
    console.log("Listening in port 3000!");
})