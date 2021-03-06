/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var WhiskyView = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
      link.innerHTML = "<form method='link' action='edit.html'>"+
    "<input type='submit' value='Edit'>" + "</form>";
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map