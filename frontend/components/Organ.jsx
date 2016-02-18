var React = require('react');
var TONES = require('../constants/Tones');
var Key = require('./key');
var Recorder = require('./Recorder');

var Organ = React.createClass({
  mapTones: function() {
    return Object.keys(TONES).map(function (tone,idx){
      return <Key noteName={tone} key={idx}/>;
    });
  },

  render: function(){
    return(
      <div>
        <Recorder />
        {this.mapTones()}
      </div>
    );
  }
});


module.exports = Organ;
