var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _tones = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.all = function() {
  return _tones.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "KEY_DOWN":
      addKey(payload.key);
      KeyStore.__emitChange();
      break;
    case "KEY_UP":
      removeKey(payload.key);
      KeyStore.__emitChange();
      break;
  }
};
// is there a better way to do this?
// we're having problems with multiple instances of a key being pushed
// in to the store.
function addKey(key) {
  if(!_tones.includes(key)) {
    _tones.push(key);
  }
}

function removeKey(key) {
  var keyIdx = _tones.indexOf(key);
  _tones.splice(keyIdx,1);
}

module.exports = KeyStore;
