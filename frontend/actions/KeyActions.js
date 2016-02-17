var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = {
  keyPressed: function(key) {
    AppDispatcher.dispatch({
      actionType: "KEY_DOWN",
      key: key
    });
  },

  keyReleased: function(key) {
    AppDispatcher.dispatch({
      actionType: "KEY_UP",
      key: key
    });
  }
};

module.exports = KeyActions;
