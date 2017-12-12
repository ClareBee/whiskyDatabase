var WhiskyView = function(whiskys){
  this.render(whiskys);
}

WhiskyView.prototype = {
  render: function(whiskys){

    console.log(whiskys);
    whiskys.forEach( function(whisky){
      var li = document.createElement('li');
      var ul = document.getElementById('whiskys');
      var img = document.createElement('img');
      img.classList = "bottle";
      img.src = "../whisky.jpg";
      text.innerText = whisky.name + ": " + '"' + whisky.type + '"';
      ul.appendChild(li);
      ul.appendChild(img);

    });
  }
}

 module.exports = WhiskyView;
