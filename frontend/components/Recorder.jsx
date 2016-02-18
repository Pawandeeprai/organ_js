var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return({isRecording: false, track: new Track({})});
  },

  componentWillMount: function () {
    KeyStore.addListener(this._record);
  },

  _record: function () {
    if(this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
      console.log(this.state.track.roll);
    }
  },

  _buttonText: function() {
    return (this.state.isRecording ? "Stop" : "Record");
  },

  _buttonAction: function() {
    if(this.state.isRecording) {
      this.state.track.stopRecording();
    } else {
      this.state.track.startRecording();
    }
    this.toggleRecording();
  },

  toggleRecording: function(){
    this.setState({isRecording : !this.state.isRecording});
  },



  render: function () {
    return (
      <div>
        <button onClick={this._buttonAction}>{this._buttonText()}</button>
        // <button onClick={this.state.track.play}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
