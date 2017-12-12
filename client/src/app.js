var WhiskyView = require('./views/whiskyView');
var app = function(){
  var url = "/whiskys";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var whiskys = JSON.parse(jsonString);
  var whiskylist = new WhiskyView(whiskys);
}

window.addEventListener('load', app);
