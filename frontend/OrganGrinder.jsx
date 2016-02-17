var AppDispatcher = require('./dispatcher/Dispatcher');
var Note = require('./util/Note');
var KeyStore = require('./stores/KeyStore');
var KeyListener = require('./util/KeyListener');
var React = require('react');
var ReactDOM = require('react-dom');
var Key = require('./components/key');
var Organ = require('./components/Organ');

KeyListener.setup();

document.addEventListener("DOMContentLoaded", function () {
  var organ = document.querySelector('#organ');
  ReactDOM.render(<Organ/>, organ);
});
