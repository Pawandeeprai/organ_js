var React = require('react');
var Note = require('../util/Note');
var KeyStore = require('../stores/KeyStore');
var TONES = require('../constants/Tones');


// this.props.noteName
var Key = React.createClass({
  getInitialState: function() {
    return {playing: false};
  },

  _keyChanged: function () {
    if(KeyStore.all().includes(this.props.noteName)) {
      this.setState({playing: true});
    } else {
      this.setState({playing: false});
    }
  },

  componentWillMount: function() {
    // debugger;
    KeyStore.addListener(this._keyChanged);
    this.note = new Note(TONES[this.props.noteName]);
  },

  render: function() {
    if(this.state.playing) {
      this.note.start();
    } else {
      this.note.stop();
    }
    return(
      <div>{this.props.noteName}</div>
    );
  }
});


module.exports = Key;
