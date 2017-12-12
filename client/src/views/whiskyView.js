var WhiskyView = function(whiskys){
  this.render(whiskys);
}

WhiskyView.prototype = {
  render: function(whiskys){

    console.log(whiskys);
    whiskys.forEach( function(whisky){
      var hook = document.getElementById('whiskys');
      var text = document.createElement('p');
      var img = document.createElement('img');
      img.classList = "bottle";
      img.src = "../whisky.jpg";
      text.innerText = whisky.name + ": " + '"' + whisky.type + '"';
      hook.appendChild(text);
      hook.appendChild(img);
    });
  }
}

 module.exports = WhiskyView;
