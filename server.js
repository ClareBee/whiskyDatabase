var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require("mongodb").ObjectId;


MongoClient.connect("mongodb://localhost:27017/whiskys", function(err, client){
  if(err){
    return console.log(err)
  }
  db = client.db('whiskys');
  console.log("connected");
  app.listen(3000, function(){
    console.log("app is listening");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

//get all
app.get("/whiskys", function(req, res){
  db.collection("whiskys").find().toArray(function(err, results){
    if(err){
      return console.log(err)
    }
    res.json(results);
  });
});

//add new
app.post("/whiskys", function(req, res){
  db.collection("whiskys").save(req.body, function(err, result){
    if(err){
      return console.log(err);
    }
    console.log("saved");
    res.redirect("/");
  });
});

//delete all
app.post("/delete", function(req, res){
  db.collection("whiskys").remove();
  res.redirect("/");
});

//edit one
app.post("/edit/:id", function(req, res){
  req.body._id = new ObjectId(req.body._id);
  db.collection("whiskys").save({_id: req.body._id}, req.body);
  res.redirect("/");
});

//delete one
app.post("/delete/:id", function(req, res){
  req.body._id = new ObjectId(req.body._id);
  db.collection("whiskys").deleteOne({_id: req.body._id});
  res.redirect("/");
});
