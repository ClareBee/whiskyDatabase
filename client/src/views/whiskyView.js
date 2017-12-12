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
      var link = document.createElement('form');
      link.classList = "edit";
      link.innerHTML = `<form action="edit/whisky._id" method="POST"><button type="submit">edit</button></form>`;
      img.classList = "bottle";
      img.src = "../whisky.jpg";
      text.innerText = whisky.name + ": " + '"' + whisky.type + '"';
      hook.appendChild(text);
      hook.appendChild(img);
      hook.appendChild(link);
    });
  }
}

 module.exports = WhiskyView;
