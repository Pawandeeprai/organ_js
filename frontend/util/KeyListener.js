var KeyActions = require('../actions/KeyActions');
var KEYS = require('../constants/Keys');


var KeyListener = {
  setup: function(){
    $(document).keydown(function(e) {
      e.preventDefault();
      var key = KEYS[e.keyCode];
      KeyActions.keyPressed(key);
    });

    $(document).keyup(function(e){
      e.preventDefault();

      var key = KEYS[e.keyCode];
      KeyActions.keyReleased(key);
    });
  }
};

module.exports = KeyListener;
//
// document.addEventListener("keydown",function(e) {
//   e.preventDefault();
//   var key = KEYS[e.keyCode];
//   console.log(key);
//   KeyActions.keyPressed(key);
// });
//
// document.addEventListener("keyup",function(e) {
//   e.preventDefault();
//   var key = KEYS[e.keyCode];
//   console.log("keyup");
//   KeyActions.keyPressed(key);
// });
