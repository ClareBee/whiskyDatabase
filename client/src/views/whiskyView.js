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
      link.innerHTML = `<form action="/edit.html">
    <input type="submit" value="Edit"/></form>`;
      img.classList = "bottle";
      img.src = "../whisky.jpg";
      text.innerText = whisky.name + ": " + whisky.type;
      hook.appendChild(text);
      hook.appendChild(img);
      hook.appendChild(link);
    });
  }
//   showIndividual: function(whiskys, whiskyToEdit){
//     whiskys.forEach(function(whisky){
//       if(whisky._id === whiskyToEdit._id){
//         var p = document.createElement('p');
//         p.innerText = whisky.name;
//         var heading = document.getElementById("whisky_to_edit");
//         heading.appendChild(p);
//       }
//     });
//   }
// }

}

 module.exports = WhiskyView;
